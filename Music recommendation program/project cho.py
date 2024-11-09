import tkinter as tk
from tkinter import PhotoImage
import tkinter.filedialog as fd
import tkinter.messagebox as mb
import numpy as np
import pygame
import os
from PIL import Image, ImageTk
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# 저장된 모델 불러오기
model = load_model('music_genre_model.keras')

# 추천 앨범 및 플레이리스트
album_data = {
    "Indie": (["fly me to the moon - xiao", "I can't get started - LesterYoung"], ["All of me - Billie Holiday", "a sunday kind of love - Etta James"]),
    "Ballade": (["광화문에서 - 규현", "사실나는 - 경서예지"], ["사건의 지평선 - 윤하", "사실 나는 - 경서예지"]),
    "Rock": (["dream official - keshi", "Vertigo - U2"], ["Fall out Boy - The phoenix", "skynyrd-free-bird - Lynyrd"]),
}

# 미리 정의된 노래 데이터
preset_songs = {
    "Indie": [{"title": "fly me to the moon", "artist": "xiao"},
               {"title": "I can't get started", "artist": "LesterYoung"},
               {"title": "All of me", "artist": "Billie Holiday"},
               {"title": "a sunday kind of love", "artist": "Etta James"}],
    "Ballade": [{"title": "오르트구름", "artist": "윤하"},
                {"title": "오늘따라 비가 와서 그런가봐", "artist": "솔지"},
                {"title": "광화문에서", "artist": "규현"},
                {"title": "사실 나는", "artist": "경서예지"},
                {"title": "사건의 지평선", "artist": "윤하"}],
    "Rock": [{"title": "Vertigo", "artist": "U2"},
             {"title": "Back in Black", "artist": "AC DC"},
             {"title": "Fall out Boy", "artist": "The phoenix"}],
}

# 절대 경로로 노래 데이터 저장소
song_data = {
    "Indie": [
        {"title": "fly me to the moon", "artist": "xiao", "file": "C:\\Users\\user\\project\\project\\song\\xiao-ye-risa-fly-me-to-the-moon-ono.mp3"},
        {"title": "I can't get started", "artist": "LesterYoung", "file": "C:\\Users\\user\\project\\project\\song\\LesterYoung-I can't get started.mp3"},
        {"title": "All of me", "artist": "Billie Holiday", "file": "C:\\Users\\user\\project\\project\\song\\Billie Holiday-All of me.mp3"},
        {"title": "a sunday kind of love", "artist": "Etta James", "file": "C:\\Users\\user\\project\\project\\song\\Etta James-a sunday kind of love.mp3"},
    ],
    "Ballade": [
        {"title": "오르트구름", "artist": "윤하", "file": "C:\\Users\\user\\project\\project\\song\\윤하-오르트구름.mp3"},
        {"title": "오늘따라 비가와서 그런가봐", "artist": "솔지", "file": "C:\\Users\\user\\project\\project\\song\\솔지-오늘따라 비가와서 그런가봐.mp3"},
        {"title": "광화문에서", "artist": "규현", "file": "C:\\Users\\user\\project\\project\\song\\규현-광화문에서.mp3"},
        {"title": "사실나는", "artist": "경서예지", "file": "C:\\Users\\user\\project\\project\\song\\경서예지-사실나는.mp3"},
        {"title": "사건의지평선", "artist": "윤하", "file": "C:\\Users\\user\\project\\project\\song\\윤하-사건의지평선.mp3"},
        {"title": "성북동", "artist": "김필", "file": "C:\\Users\\user\\project\\project\\song\\김필-성북동.mp3"},
        {"title": "i Go Party", "artist": "그렉", "file": "C:\\Users\\user\\project\\project\\song\\그렉 - i Go Party.mp3"},
        {"title": "Be ok(feat.baecigi)", "artist": "유성은", "file": "C:\\Users\\user\\project\\project\\song\\유성은 - Be ok (feat.baecigi).mp3"},
    ],
    "Rock": [
        {"title": "Fall out Boy", "artist": "The phoenix", "file": "C:\\Users\\user\\project\\project\\song\\Fall out Boy-The phoenix.mp3"},
        {"title": "Vertigo", "artist": "U2", "file": "C:\\Users\\user\\project\\project\\song\\U2-Vertigo.mp3"},
        {"title": "Back in Black", "artist": "AC DC", "file": "C:\\Users\\user\\project\\project\\song\\AC DC-Backinblack.mp3"},
        {"title": "Emerald Sword", "artist": "Rhapsody", "file": "C:\\Users\\user\\project\\project\\song\\Rhapsody-Emerald Sword.mp3"},
        {"title": "The Final Countdown", "artist": "Europe", "file": "C:\\Users\\user\\project\\project\\song\\Europe-The Final Countdown.mp3"},
        {"title": "I Was Born to Lover you", "artist": "Queen", "file": "C:\\Users\\user\\project\\project\\song\\Queen-I Was Born to Love you.mp3"}
    ],
}

# pygame 초기화
pygame.mixer.init()

# 장르 예측 함수
def predictGenre(image_path):
    img = image.load_img(image_path, target_size=(150, 150))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    predictions = model.predict(img_array)
    genre_index = np.argmax(predictions)
    print("73",genre_index)

    genres = ['Ballade', 'Indie', 'Rock']  # 대문자로 수정
    return genres[genre_index]

# 이미지 파일을 보여 주는 함수
def showImage(filename, label, genre_label):
    img = Image.open(filename)
    print("81",filename)

    # 이미지 크기 조정
    max_size = (200, 200)  # 최대 크기 설정
    img.thumbnail(max_size)  # 비율을 유지하며 크기 조정

    dispImage = ImageTk.PhotoImage(img)  # 변경된 부분
    label.configure(image=dispImage)
    label.image = dispImage  # 이미지 객체 참조를 유지해야 합니다.

    genre = predictGenre(filename)  # 장르 예측
    genre_label.configure(text=f"포토는 {genre} 분위기입니다.", font=('Georgia', 20))
    recommendAlbums(genre)

# 파일 대화 상자를 열어 이미지를 선택하고 표시하는 함수
def openImageFile():
    fpath = fd.askopenfilename(filetypes=[("Image Files", "*.png;*.jpg;*.jpeg;*.bmp")])
    if fpath:
        showImage(fpath, imageLabel, genreLabel)

# 장르 기반 앨범 추천 함수
def recommendAlbums(genre):
    recommended_albums, playlists = album_data.get(genre, ([], []))
    print("97",genre)
    if recommended_albums:
        playlistLabel.configure(text="앨범 재생목록", font=('Helvetica', 20))
        addPresetSongs(genre)
    else:
        playlistLabel.configure(text="재생 목록: 없음")

# 미리 정의된 노래 추가 함수 (중복 방지 기능 포함)
def addPresetSongs(genre):
    print("113",genre)
    for song in preset_songs.get(genre, []):
        if not any(s['title'] == song['title'] and s['artist'] == song['artist'] for s in song_data[genre]):
            song_data[genre].append(song)

    # 선택된 장르에 따른 플레이리스트 업데이트
    song_list = song_data[genre]
    updatePlaylist(song_list)

# 플레이리스트 업데이트 함수
def updatePlaylist(song_list):
    print("119", song_list)
    playlist.delete(0, tk.END)
    for song in song_list:
        playlist.insert(tk.END, f"{song['title']} - {song['artist']}")


def playSong(genre,song_index):
    try:
        # 인덱스가 유효한지 확인
        if song_index is not None and 0 <= song_index < len(song_data[genre]):
            song_path = song_data[genre][song_index]["file"]
            print("127",song_path)

            # 파일 경로 유효성 확인
            if not os.path.exists(song_path):
                mb.showerror("오류", f"파일이 존재하지 않습니다: {song_path}")
                return

            # Pygame 초기화 및 음악 재생
            pygame.mixer.init()
            pygame.mixer.music.load(song_path)  # 파일 경로를 인수로 전달
            pygame.mixer.music.play()  # 추가 인수 없이 호출
        else:
            mb.showwarning("경고", "유효한 곡을 선택하세요.")
    except Exception as e:
        mb.showerror("오류", f"노래를 재생하는 도중 오류가 발생했습니다: {str(e)}")

# 볼륨 조절과 색상 변경 함수
def setVolume(volume):
    pygame.mixer.music.set_volume(int(volume) / 100)
    updateVolumeIndicator(int(volume))

def updateVolumeIndicator(volume_level):
    if volume_level < 30:
        color = "#0000FF"  # 파란색 (낮은 볼륨)
    elif volume_level < 70:
        color = "#00FF00"  # 초록색 (중간 볼륨)
    else:
        color = "#FF0000"  # 빨간색 (높은 볼륨)
    volumeIndicator.configure(bg=color)


def on_enter(e):
    e.widget['background'] = '#ffcc00'  # 마우스 오버 시 배경색 변경

def on_leave(e):
    e.widget['background'] = '#87CEEB'  # 마우스 떠날 시 원래 색상으로 변경

# GUI 설정
root = tk.Tk()
root.title("음악 추천 프로그램")
root.geometry("850x850")
root.configure(bg="#87CEEB")  # 배경색 설정

# 배경 이미지 추가
bg_image = PhotoImage(file="C:\\Users\\user\\project\\project\\background.jpg")  # 이미지 파일 경로
bg_label = tk.Label(root, image=bg_image)
bg_label.place(relwidth=1, relheight=1)  # 전체 배경으로 설정


# 스타일 설정
style = {'padx': 10, 'pady': 10, 'bg': '#87CEEB', 'fg': 'black', 'font': ('Helvetica', 15),'bd': 3,
    'relief': 'raised'}
style_button = {'padx': 10, 'pady': 10, 'bg': '#87CEEB', 'fg': 'black', 'font': ('Helvetica', 15), 'bd': 4,
                'relief': 'raised'}

# 파일 열기 버튼
openButton = tk.Button(root, text="포토 열기", command=openImageFile , **style_button)
openButton.pack(pady=10)

# 이미지 라벨
imageLabel = tk.Label(root)
imageLabel.pack(pady=10)

# 장르 라벨
genreLabel = tk.Label(root, text="", bg="#87CEEB",font=('Georgia', 20))
genreLabel.pack(pady=10)

# 재생 목록 라벨
playlistLabel = tk.Label(root, text="",bg="#87CEEB", font=('Courier', 20))
playlistLabel.pack(pady=10)

# 재생 목록 리스트 박스
playlist = tk.Listbox(root, width=50, height=10)
playlist.pack(pady=10)

# 재생 버튼
play_button = tk.Button(root,
                        text="재생",
                        command=lambda: playSong(genreLabel.cget("text").split(" ")[1],
                        playlist.curselection()[0] if playlist.curselection() else None),**style_button)

play_button.bind("<Enter>", on_enter)
play_button.bind("<Leave>", on_leave)
play_button.pack(pady=15)


# 볼륨 슬라이더 및 인디케이터
volumeSlider = tk.Scale(root, from_=0, to=100, orient=tk.HORIZONTAL, command=setVolume, font=('Helvetica', 15), bg="#87CEEB")
volumeSlider.set(50)
volumeSlider.pack(pady=10)
volumeIndicator = tk.Label(root, text="Volume Indicator", width=15, font=('Helvetica', 15), bg="#00FF00")
volumeIndicator.pack()

root.mainloop()





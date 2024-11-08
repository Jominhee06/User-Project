import React, { useState } from 'react';
import './Artist.css';  // CSS 파일 경로 확인

function Artist() {
    const [isAlbumModalOpen, setIsAlbumModalOpen] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(null);

   // 앨범 데이터 배열
const albums = [
    { 
        name: '아무렇지 않게, 안녕', 
        description: '2020년 3월 31일에 발매된 HYNN의 미니앨범 타이틀곡 중 하나입니다. 다른 타이틀곡은 오늘에게라는 곡이며 이번 곡 아무렇지 않게 안녕은 HYNN이 1년 만에 틔운 봄의 꽃이며 따스한 봄날 테마로 얼어붙은 강은 따스한 햇살에 녹아 유유히 흐르고 도시의 사람들은 여행을 준비에 분주하다는 내용을 담고 있습니다.', 
        imageUrl: 'https://image.bugsm.co.kr/album/images/500/203156/20315652.jpg',
        audioUrl: '/songs/아무렇지않게안녕.mp3'
    },
    { 
        name: '차가워진 이 바람엔 우리가 써있어(bad love)', 
        description: '얼어붙은 강과 찬 바람에 문을 걸어 잠근 도시를 배경으로 한 겨울의 테마로 쓴 노래이다. 겨울이라는 시린 계절에 마주한 이별의 단면을 전하며 한겨울 인적 없는 얼어붙은 호숫가, 그 주변 잡힐 듯 선명한 겨울 풍경을 뒤로 한 채 지난 사랑을 읊조리고 얼음처럼 단단하게 얼어붙은 연인의 마음을 어루만지며, 이내 체념한듯 목 놓아 부르는 슬픈 감정들마저 음색으로 인해 아름답게 들리도록 만들었습니다.', 
        imageUrl: 'https://image.bugsm.co.kr/album/images/500/202880/20288076.jpg',
        audioUrl: '/songs/차가워진 이 바람엔 우리가 써있어.mp3'
    },
    { 
        name: '시든 꽃에 물을 주듯', 
        description: '식어버린 연인의 마음을 시든 꽃에 비유해 노래한 곡으로, HYNN의 저음과 고음을 한계 없이 넘나드는 폭넓은 보컬 스펙트럼이 돋보이는 곡입니다.', 
        imageUrl: 'https://image.bugsm.co.kr/album/images/500/202421/20242177.jpg',
        audioUrl: '/songs/시든꽃에물을주듯.mp3'
    },
    { 
        name: '가장 찬란한 빛으로 쏟아지는', 
        description: 'HYNN(박혜원)의 신곡 ‘가장 찬란한 빛으로 쏟아지는’은 가장 깊은 어둠을 뚫고 마침내 다가오는 소중한 빛을 만나는 찬란한 순간을 다룬 발라드 곡이다. 섬세하고 웅장한 오케스트라 사운드와 HYNN(박혜원)의 여리지만 단단한 음색과 가창력이 어우러진다.', 
        imageUrl: 'https://www.akbobada.com/home/akbobada/archive/akbo/img/202406110122028.jpg',
        audioUrl: '/songs/가장 찬란한 빛으로 쏟아지는.mp3'
    },
    { 
        name: '오늘에게', 
        description: '록 팝 발라드 장르의 오늘에게는 더 나은 내일과 나를 응원하는 곡으로, 설렘과 용기를 품고 한걸음 나아가는 청춘들에게 바치는 노래다. ', 
        imageUrl: 'https://image.bugsm.co.kr/album/images/500/203156/20315652.jpg',
        audioUrl: '/songs/오늘에게.mp3'
    },
    { 
        name: '막차', 
        description: '박혜원님이 직접 작사에 참여한 이 노래는 꿈을 향해 달려가는 이들, 삶에 지친 이들 모두를 위로합니다.고된 하루를 보내고 하루를 마무리하며 들으면 그 때의 감정을 극대화할 수 있는 곡입니다. ', 
        imageUrl: 'https://image.bugsm.co.kr/album/images/500/202880/20288076.jpg',
        audioUrl: '/songs/막차.mp3'
    },
    { 
        name: '오늘 노을이 예뻐서', 
        description: '신곡 오늘 노을이 예뻐서에 대해 HYNN(박혜원)은 "노을을 보며 사랑하는 사람들과 사랑했던 시간들, 그리고 사랑했던 내 모습까지 떠올렸으면 좋겠다"고 곡의 메시지를 설명했다', 
        imageUrl: 'https://image.bugsm.co.kr/album/images/500/41084/4108442.jpg',
        audioUrl: '/songs/오늘노을이예뻐서.mp3'
    },
    { 
        name: '오늘은 응원할게', 
        description: '오늘도 응원할게는 미래의 내가 오늘의 나에게 전하는 응원의 메시지로, HYNN(박혜원)의 청량하면서도 힘 있는 음색이 돋보이는 록 장르의 곡이다. 박근태가 프로듀싱을 맡았으며, 모던 록 신을 대표하는 밴드 9와 숫자들의 송재경이 작사를 맡아 완성도를 높였다.', 
        imageUrl: 'https://cdnimg.melon.co.kr/cm2/album/images/115/40/709/11540709_20240715151525_500.jpg?460d7cf69857524443e9b8cb505ce3a4/melon/optimize/90',
        audioUrl: '/songs/오늘은응원할게.mp3'
    },
    { 
        name: '너에게로', 
        description: '‘너에게로’는 박혜원의 청량하고 섬세한 음색이 돋보이는 록 장르의 곡이다. 이날 쇼케이스에서 ‘너에게로’를 라이브로 선보인 박혜원은 “숨쉴 구간이 없어서 불러도 불러도 어렵다”며 웃었다.평소 발라드 장르로 사랑받은 박혜원이 ‘히트곡 제조기’ 박근태 프로듀서와 손잡고 청량한 록에 새롭게 도전한다는 점에서 기대를 모은다.', 
        imageUrl: 'https://www.raonnews.com/data/photos/20230729/art_16895744477929_09595e.jpg',
        audioUrl: '/songs/너에게로.mp3'
    },
    { 
        name: '조제', 
        description: '조제 (Josee)는 영화 조제 호랑이 그리고 물고기들에 영감을 받아 만들어진 곡으로, HYNN(박혜원) 표 독보적 발라드 감성이 실렸다. 여행의 색깔, 우리 좀 걸을까 등 HYNN(박혜원)과 꾸준히 함께 작업해오고 있는 뮤지션 스무살이 작곡했다. HYNN(박혜원)이 직접 작사에 참여했으며 이별 후 홀로 남은 조제의 일상과 마음을 떠올린 가사가 인상적이다.', 
        imageUrl: 'https://i1.sndcdn.com/artworks-EHjGslgv0Vxt92kH-GyFTGw-t1080x1080.jpg',
        audioUrl: '/songs/조제.mp3'
    },
    { 
        name: '봄의 발라드', 
        description: 'HYNN의 첫 듀엣곡으로, HYNN과 같은 회사에서 활동 중인 독보적인 가창력의 보컬리스트 NILE(나일)이 함께 불렀다. 추운 겨울이 가고 봄이 오듯, 지난 이별의 아픔과 그리움을 흘려보내고 행복해지자는 마음을 담은 노래로, 애틋함과 따뜻함이 공존하는 곡이다. 서정적인 어쿠스틱 기타와 피아노 선율 위로 이별의 아픔을 어루만지는 듯한 나일의 따뜻한 목소리와 HYNN의 애틋하면서도 힘 있는 음색이 각각 흘러나오다가, 곡 후반부에 이르러서는 두 사람의 아름다운 하모니로 감동을 이어간다. 이별에 가슴 시려했던 지난 사랑의 아픔을 딛고 일어나려는 이들에게 따뜻한 공감과 용기를 전할 예정이다', 
        imageUrl: 'https://image.bugsm.co.kr/album/images/200/202421/20242177.jpg?version=20210421045220.0',
        audioUrl: '/songs/봄의발라드.mp3' 
    },
    { 
        name: '주말이 싫어졌어', 
        description:'박혜원은 앞서 4월 김재환의 그대가 없어도 난 살겠지에서 듀엣 파트너로 나서며 인연을 맺었다.이번 신곡은 떠나간 사람을 잊기 위해 노력하지만 마음대로 되지 않는 이별의 과정을 그린 발라드곡이다. 소속사는 "두 사람의 시원한 가창력과 누구나 공감할 수 있는 가사로 올여름 대중의 감성을 자극할 것"이라고 소개했다.', 
        imageUrl: 'https://image.bugsm.co.kr/album/images/200/40564/4056400.jpg?version=20210716063843.0',
        audioUrl: '/songs/주말이싫어졌어.mp3'
    },
    { 
        name: '사랑먼지', 
        description: '"사랑먼지"는 4인조 여성 보컬 그룹 버블 시스터즈의 히트곡을 이예준, 케이시, 박혜원, 이비의 목소리로 새롭게 재해석한 발라드곡이에요 어쿠스틱한 편곡으로 감성적 몰입감을 높였으며 후반부로 갈수록 화려한 스트링과 풍성한 코러스가 더해져 이별의 아픔을 더욱 드라마틱하게 그려냅니다.',
        imageUrl: 'https://image.bugsm.co.kr/album/images/500/41091/4109104.jpg',
        audioUrl: '/songs/사랑먼지.mp3'
    },
];

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album);
        setIsAlbumModalOpen(true);
        
        const audioElement = document.getElementById("album-audio");
    if (audioElement) audioElement.play().catch(error => console.error("Auto-play blocked:", error));
    };

    const handleCloseModal = () => {
        setIsAlbumModalOpen(false);
        // 모달을 닫을 때 오디오 일시 정지
        const audioElement = document.getElementById("album-audio");
        if (audioElement) audioElement.pause();
    };

    return (
        <div className="artist-container">
            <h2>Artist</h2>
             {/* 아티스트 소개 추가 */}
            <section className="artist-introduction">
                <h3>HYNN</h3>
                <img 
                    src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/012/29/685/1229685_20241011135757_500.jpg?4c3fc430eebd466493587ccef107bfe4/melon/resize/416/quality/80/optimize" 
                    alt="HYNN"
                    className="artist-photo" 
                    width={200} 
                />
                
                <div class="info-card">
                    <h3>수상이력</h3>
                    <p>2020 APAN MUSIC AWARDS | 여자 신인상</p>
                </div>

                <div class="info-card">
                    <h3>활동정보</h3>
                    <p><strong>데뷔:</strong> 2018.12.28</p>
                    <p><strong>활동년대:</strong> 2010, 2020 년대</p>
                    <p><strong>유형:</strong> 솔로 | 여성</p>
                    <p><strong>장르:</strong> 발라드, 국내드라마, 록/메탈, R&B/Soul, 성인가요/트로트</p>
                    <p><strong>소속사명:</strong> 엔터테인먼트 뉴오더</p>
                    <p><strong>소속그룹:</strong> 더 리슨 (솔지, 김나영, 케이시(Kassy), 승희(오마이걸), HYNN(박혜원)), WSG워너비, WSG워너비 (가야G)</p><br/>
                </div>

                <p>
                    HYNN(박혜원)은 엔터테인먼트 뉴오더에 소속된 대한민국의 가수이다.<br />2016년 Mnet에서 방영된 "슈퍼스타K 2016"에서 파워풀한 가창력으로 TOP 3에 올라 주목을 받았던 그는 프로그램
                    에서 선보인 'Stand Up For You', 'Lonely Night'으로 화제가 된 바 있다. 2018년 12월, 완성형 가창력과 섬세한 감성 표현, 개성 있는 음색을 담아낸 'LET ME OUT'를 발매하면서 가요계에 정식 데뷔했다.
                </p>
            </section>
            
            <h3>앨범 모음</h3>
            <ul>
                {albums.map((album, index) => (
                    <li key={index} onClick={() => handleAlbumClick(album)}>
                        <img src={album.imageUrl} alt={album.name} width={100} />
                        <p>{album.name}</p>
                    </li>
                ))}
            </ul>

            {isAlbumModalOpen && (
                <div className="album-overlay">
                    <div className="album-modal">
                        <div className="modal-content">
                            <h3>{selectedAlbum.name}</h3>
                            <img src={selectedAlbum.imageUrl} alt={selectedAlbum.name} width={200} />
                            <p>{selectedAlbum.description}</p>
                            <audio id="album-audio" src={selectedAlbum.audioUrl} controls />
                            <button onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Artist;



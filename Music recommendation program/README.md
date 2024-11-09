## 데이터 자료
"https://mybox.naver.com/#/my"
- SongData 폴더에 들어가시면 있습니다.
- 노래 자료가 들어있는 폴더 페이지입니다. 

## 이미지를 이용한 음악 추천 프로그램 ##
- Tkinter 패키지를 이용해서 사용자 친화적 UI를 구성
- Web Crolling을 통한 학습 이미지 데이터셋과 CNN신경망을 이용하여 생성한 AI 모델을 이용하여 사진의 특징을 분석하여 분위기에 맞는 음악 장르가 자동으로 추출하고 하단에 플레이리스트 출력 및 음악 재생 가능하도록 코드 구현

- 이미지의 특징을 분석하여 설정된 이미지 분위기에 맞는 앨범 장르를 자동으로 추출하여 실생활에서 간편하고 편리하게 장르별 추천 플레이리스트를 제공 및 재미요소 함양

# 개요
- 사용자가 특정 이미지를 업로드하면 이미지 속 분위기와 연관된 장르의 음악을 추천해주는 프로그램입니다. 이미지의 색상, 분위기 등을 분석하여 사용자가 즐길 만한 앨범과 곡을 자동으로 선별합니다.

# 목표
- 사용자가 손쉽게 이미지와 어울리는 음악 추천을 받을 수 있도록 하여 시각적인 감성과 청각적인 경험을 동시에 제공하는데 목적이 있습니다.

## 기술 스택
- 프로그래밍 언어: Python
- GUI 라이브러리: Tkinter
- 이미지 분석: PIL(Python imaging Library)
- 머신러닝 모델: TensorFlow 기반 이미지 감성 분석 모델 (CNN 기술 활용)
- 음악 데이터: 외부 파일 불러와서 저장
- Tkinter는 간편한 GUI 설계가 가능하며, PIL은 이미지 처리와 색상 분석에 적합하여 사용했습니다. TensorFlow 모델은 이미지 감성에 따라 음악을 추천하기 위한 데이터 학습 및 예측에 효과적이며 CNN 기술을 활용하였습니다.

## 기능 및 구현
- 이미지 분석을 통한 음악 장르 추천: 사용자가 업로드한 이미지를 분석하여, 해당 이미지에 맞는 음악 장르를 추천합니다.
- 구현: PIL을 이용하여 이미지의 주요 색상을 추출하고 이를 바탕으로 색상과 장르 간 연관성을 통해 추천합니다.
- 감성 분석 모델: TensorFlow를 활용하여 이미지의 색감, 밝기, 구조를 감성적으로 분석하여 이미지와 유사한 분위기의 음악을 추천합니다.
- 음악 장르별 앨범 추천: 분석 결과에 따라 특정 장르를 추천하고 장르별 앨범 리스트를 제공합니다.
- 구현: 외부 파일을 불러와 저장을 한 뒤 저장된 음악 데이터를 추천 장르에 해당하는 앨범을 리스트업 하여 사용자에게 제공합니다.
- 앨범 및 트랙 자동 재생 가능: 추천받은 앨범에서 사용자가 선택한 트랙을 재생하여 감상할 수 있습니다.
- 구현: tkinter와 함께 파이썬의 pygame 라이브러리를 이용하여 음악 재생 및 볼륨 조절 기능을 추가했습니다.

## UI/UX 디자인
- 사용자 인터페이스: 직관적인 인터페이스로 사용자가 이미지를 업로드하면 자동으로 관련 음악 리스트가 나타나도록 구성했습니다.
- 화면 구성: 이미지 업로드 버튼, 분위기에 맞는 추천 장르와 앨범 리스트, 음악 재생 컨트롤러(재생, 볼륨 조절)등으로 간단하게 구성했습니다.
- 사용자 흐름: 사용자는 이미지를 업로드하고 추천 리스트를 확인한 후 선호하는 음악을 클릭하여 바로 재생할 수 있습니다.

<img src = "https://github.com/user-attachments/assets/9e89ede2-4476-4a75-a432-0f893093c8f3" width="300px" height="300px">

## 프로젝트 구조
- 구조: 클라이언트 – 서버 모델 없이 단일 애플리케이션으로 구성되어 로컬 환경에서 작동합니다.
- 데이터 흐름: 사용자가 이미지를 업로드하면 이미지 데이터가 PIL과 TensorFlow 모델을 통해 분석되고 결과값을 바탕으로 음악 추천 알고리즘이 실행됩니다. 외부에서 가져온 파일
에서 결과에 맞는 앨범을 찾아 사용자에게 보여줍니다.


## 테스트 및 검증
- 테스트: 이미지 업로드, 분석, 추천 리스트 생성, 음악 재생 등 주요 기능에 대해 개별 테스트 진행하였습니다.
- 통합 테스트: 이미지 분선과 음악 추천 기능 간의 흐름이 자연스럽게 연결되는지 확인하기 위해 통합 테스트를 진행하였습니다.
- 결과: 주요 기능이 예상대로 작동하며, 테스트 결과 이미지와 추천 음악의 감성적 일관성이 높은 확률로 맞는 것으로 확인되었습니다.

## 7. 어려움 및 해결방안
- 이미지 분석 정확도 문제: 색상이 다양한 이미지를 분석할 때 일관성 있는 장르를 추천하는데 어려움이 있었습니다. 이를 해결하기 위해 이미지의 주요 색상만 추출하고 색상 그룹별 장르를 세분화하여 정확도를 높였습니다.


## 결과 및 성과
- 이미지와 음악 장르의 연관성을 바탕으로 사용자에게 맞춤형 음악을 추천함으로써, 사용자의 만족도를 높일 수 있었습니다. 특히 감성 분석 모델을 통해 이미지와 잘 어울리는 음악을 제안하는 기능에 대해 긍정적인 평가를 받을 수 있었습니다.
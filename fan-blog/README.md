# 2. 메인 페이지 및 Card를 이용한 앨범 모음 
<img src="https://github.com/user-attachments/assets/ca24faf6-a1eb-47f5-a800-33a8515d426f" width="400px" height="300px" style="float: left; margin-right: 10px;">
<img src="https://github.com/user-attachments/assets/977f63d7-52da-4576-891e-d3d23eae2e84" width="400px" height="300px" style="float: right; margin-left: 10px;">
<img src="https://github.com/user-attachments/assets/8a953ef1-1980-4c4f-9359-e011d87d5932" width="400px" height="300px" style="float: right; margin-right: 10px;">

 - 평소에 좋아하던 가수에 이미지와 앨범과 노래를 이용해서 갤러리와 해당 가수에 에피소드 및 정보를 통하여 만든 팬 사이트입니다.
 
 - 갤러리를 만들어 해당하는 페이지에 들어가게되면 음악이 자동으로 재생되어 음악을 들으면서 이미지를 구경할 수 있습니다.
 
 - 아티스트 페이지에서는 가수 소개와 앨범 모음을 볼 수 있고 앨범을 클릭하면 앨범에 대한 설명과 노래를 들을 수 있습니다.
 
 - 해당 가수에 에피소드를 통하여 평소에 몰랐던 것과 축하해야 할 것들을 뉴스를 통해 정보를 얻어 개인적으로 확인할 수 있도록 편리하도록 링크 설정을 하였습니다.
 
 - React를 이용해서 만든 반응형 웹 사이트를 만들었고 React-Router-dom와 Navbar를이용하였습니다.
 
 - 링크를 통하여 아티스트에 SNS로 이동하여 더욱 자세히 볼 수 있도록 하였습니다.
 
 - 팬 전용 콘텐츠 페이지를 생성하여 구독한 사람들만 해당 영상을 즐길 수 있는 페이지도 만들었습니다.
 
 - 알림을 통해 최신 콘텐츠가 업데이트되면 알려주는 설정도 만들었습니다.

## 서버 및 DB 연결
<img src = "https://github.com/user-attachments/assets/e108afe8-4b71-4d1b-b326-ea560a6c3b3f" width="600px" height="400px">
<img src = "https://github.com/user-attachments/assets/99861d31-8cc1-4e6f-b9c9-3c47e7934623" width="600px" height="400px">
 
- express, node.js를 이용하여 서버를 연결하고 MariaDB에 정보를 저장하여 관리할 수 있도록 하였습니다.
- 로그인 정보를 관리하기 위해서 postman을 이용하여 DB연결을 하기 위해서 Sequelize 모델과 마이그레이션을 실행하여 파일 확인을 하였습니다.

## Sequelize
- Sequelize는 node.js에서 사용할 수 있는 ORM 라이브러리이다.
- ORM은 객체와 데이터베이스 간의 매핑을 자동으로 처리하여 개발자가 직접 SQL 쿼리를 작성하지 않고도 데이터베이스와 상호 작용을 할 수 있게 해준다.
- Sequelize는 MySQL을 비롯한 다양한 데이터베이스 시스템을 지원하며 테이터베이스의 스키마를 자동으로 생성할 수 있다. 또한 Model 정의를 통해 데이터베이스와 객체 간의
  매핑을 설정할 수 있으며, 쿼리 생성 및 실행, 트랜잭션 관리, 데이터 유효성 검사 등 다양한 기능을 제공한다.

## ORM
- 객체와 관계형 데이터베이스 사이에 데이터를 변환하는 기술입니다.
- 데이터베이스의 테이블을 객체로 매핑하여 객체를 통해 데이터를 쉽게 다룰 수 있게 한다.

## ORM의 장점
- 객체와 데이터베이스 간의 매핑이 자동 처리되어 쿼리 작성의 번거로움이 줄어든다.
- 객체 지향 프로그래밍에서 사용하는 클래스, 객체, 상속 등의 개념을 사용하기 때문에 코드의 가독성이 높아지고 유지보수가 쉬워진다.
- 데이터베이스의 스키마 변경 시 ORM에서 자동으로 업데이트를 처리할 수 있다.

## 데이터 자료
"https://mybox.naver.com/#/my"
- 자료 폴더에 들어가시면 있습니다.
- 노래와 비디오 자료가 들어있는 폴더 페이지입니다.

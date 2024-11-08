import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';

function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  // 재생할 곡 리스트
  const songs = [
    require('C:\\기업 조사\\포트폴리오\\fan_blog\\fan-blog\\src\\pages\\song\\오늘노을이예뻐서.mp3'),
    require('C:\\기업 조사\\포트폴리오\\fan_blog\\fan-blog\\src\\pages\\song\\오늘은응원할게.mp3')
  ];

  // 이미지 배열
  const images = [
    { src: 'https://assets.repress.co.kr/photos/af5b52862a6bd9e5e2a352a3f4326c0f/original.png', alt: 'Concert 1', category: 'concert' },
    { src: 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/09/06/43289af6-8513-4cc9-8178-3a718968b136.jpeg', alt: 'Concert 2', category: 'concert' },
    { src: 'https://img.sbs.co.kr/newsnet/etv/upload/2023/03/29/30000836329.jpg', alt: 'Concert 3', category: 'concert' },
    { src: 'https://cdn.topstarnews.net/news/photo/201909/668906_374798_1621.jpg', alt: 'Concert 4', category: 'concert' },
    { src: 'https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202011/20/tvdaily/20201120190526977cbmr.jpg', alt: 'Concert 5', category: 'concert' },
    { src: 'https://thumb.mt.co.kr/06/2019/12/2019122414540369116_1.jpg/dims/optimize/', alt: 'Concert 6', category: 'concert' },
    { src: 'https://img1.newsis.com/2023/02/22/NISI20230222_0001201786_web.jpg', alt: 'Concert 7', category: 'concert' },
    { src: 'https://i1.sndcdn.com/artworks-8Rv8gwihGQRKcJrb-qlHLTg-t500x500.jpg', alt: 'Concert 8', category: 'concert' },
    { src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MTRfMTA4%2FMDAxNTkyMTI4NzA3NDU5.I5SzbEJUKhauVDh7J1YivuTmy1np8WsLq2AB-v6JTGog.eAmt3XHF4vaVvoP71eW7FFzbVQqjGxQYPf-DhUyrCsQg.PNG.shyhjin%2FIMG_2256.PNG&type=sc960_832', alt: 'Concert 9', category: 'concert' },
    { src: 'https://cdn.univ20.com/wp-content/uploads/2019/11/941889d84c11a34d6f379b84ddaaacc3.png', alt: 'Concert 10', category: 'concert' },
    { src: 'https://sleeplessaliana1.files.wordpress.com/2021/10/hynn-3rd-mini-album-to-you.jpg?w=640', alt: 'Concert 11', category: 'concert' },
    { src: 'https://image.newsis.com/2023/02/22/NISI20230222_0001201787_web.jpg', alt: 'Concert 12', category: 'concert' },
    { src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F415%2F2019%2F11%2F07%2F201910281730570910_3_20191107080132900.jpg&type=sc960_832', alt: 'Concert 13', category: 'concert' },
    { src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5785%2F2023%2F08%2F10%2F0000038650_003_20230810182003666.jpg&type=sc960_832', alt: 'Concert 14', category: 'concert' },
    { src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F408%2F2023%2F09%2F15%2F0000200883_001_20230915142501370.jpg&type=sc960_832', alt: 'Concert 15', category: 'concert' },
    { src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMjExMjhfMjMy%2FMDAxNjY5NTYzMjY2OTg2.qaauVuGAoVcPd2u1XbQ8X9JF_Sy80UNte-nyMd93r5Mg.fuXXXIP_KFsWaBNpjO1kv7UWSX-RsQnS_2616_fFvWAg.JPEG%2FexternalFile.jpg&type=sc960_832', alt: 'Concert 16', category: 'concert' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };

  const handlePlayPause = async () => {
    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("오디오 재생 오류:", error);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  const handleSongEnd = () => {
    setCurrentSongIndex((prevIndex) =>
      (prevIndex + 1) % songs.length
    );
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("오디오 재생 오류:", error));
    }
  }, [currentSongIndex]);

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <p>환영합니다. HYNN의 노래를 감상하며 다양한 사진도 즐겨보세요.</p>

      <button onClick={handlePlayPause} className="audio-control">
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
      
      <audio
        ref={audioRef}
        src={songs[currentSongIndex]}
        onEnded={handleSongEnd}
      />

      <div className="slideshow">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className="slide-img" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${inView ? 'fade-in' : ''}`}
            onClick={() => openModal(image)}
            ref={ref}
          >
            <img src={image.src} alt={image.alt} className="gallery-img" />
            <div className="overlay">
              <span>Image</span>
              <span>Photos</span>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        {currentImage && (
          <div>
            <h3>{currentImage.alt}</h3>
            <img src={currentImage.src} alt={currentImage.alt} className="modal-img" />
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Gallery;






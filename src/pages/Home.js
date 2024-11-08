import React, { useState, useEffect } from 'react';
import './Home.css'; // CSS 파일 추가

const images = [
    'https://img.hankyung.com/photo/202305/BF.33346159.1.jpg', // 아티스트 사진 URL
    'https://cdn.policetv.co.kr/news/photo/202003/7001_3648_2021.jpg', // 아티스트 사진 URL
    'https://cdnweb01.wikitree.co.kr/webdata/editor/202410/19/img_20241019180636_161cfbea.webp'  // 아티스트 사진 URL
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3초마다 슬라이드 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
    }, []);

    return (
        <div>
            <h2>Fan site</h2>
            <p>HYNN 사이트에 오신걸 환영합니다. 재미있게 구경하시고 놀다 가세요!</p>

            {/* 큰 비주얼 배너 */}
            <div className="banner">
                <img src={images[currentIndex]} alt="Artist Banner" className="banner-image" />
            </div>

            {/* 공연 일정 */}
            <div className="schedule">
                <h3>Upcoming Events</h3>
                <ul>
                    <li>2024/11/07 동신대학교 축제</li>
                    <li>2024/10/26 ~ 2024/11/03 - 그랜드 민트 페스티벌 2024</li>
                    <li>2024.07.26 ~2024.07.28 - 2024 HYNN(박혜원) 콘서트 〈하계 : 夏季〉</li>
                    <li>2024.03.09 - 2024 데이 데이 콘서트Ⅰ HYNN(박혜원) X #안녕 - 안양</li>
                    <li>2024/02/02 ~ 2024/02/18 - 박혜원 콘서트</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;


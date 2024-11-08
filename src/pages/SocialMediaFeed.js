import React, { useState, useEffect } from 'react';
import './SocialMediaFeed.css';

function SocialMediaFeed() {
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);

    // 데이터를 API에서 받아오는 부분을 구현해야 합니다.
    useEffect(() => {
        // 예시로 2초 후에 로딩을 끝내는 코드
        setTimeout(() => {
            setLoading(false);
            // 실제 API 호출 시, error 발생 시, setError("Failed to load feed.") 사용할 수 있음
        }, 2000);
    }, []);

    return (
        <div className="social-media-container">
            <h2>SNS Feed</h2>
            <div className="social-media">
                {error ? (
                    <p className="error" style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>
                        {error}
                    </p>
                ) : loading ? (
                    <div className="loading">
                        <span>Loading...</span>
                        <div className="spinner"></div> {/* 로딩 스피너 */}
                    </div>
                ) : (
                    <>
                        <div className="social-media-section">
                            <h3>
                                <a
                                    href="https://www.facebook.com/people/HYNN-%EB%B0%95%ED%98%9C%EC%9B%90/100046609068075/?locale=ko_KR"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://thumb.mt.co.kr/06/2021/02/2021022517482921954_1.jpg/dims/optimize/"
                                        alt="Facebook"
                                    />
                                    Facebook
                                </a>
                            </h3>
                        </div>

                        <div className="social-media-section">
                            <h3>
                                <a
                                    href="https://www.instagram.com/hynn_01/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://cdn.econonews.co.kr/news/photo/201901/51821_43722_1332.PNG"
                                        alt="Instagram"
                                    />
                                    Instagram
                                </a>
                            </h3>
                        </div>

                        <div className="social-media-section">
                            <h3>
                                <a
                                    href="https://www.youtube.com/@hynn9109"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://yt3.googleusercontent.com/ytc/AIdro_mjPOB8h-cMEZq3ctWbl3AHfCcNiO_vgr5Gym-NJAlDXJ4=s900-c-k-c0x00ffffff-no-rj"
                                        alt="YouTube"
                                    />
                                    YouTube
                                </a>
                            </h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SocialMediaFeed;



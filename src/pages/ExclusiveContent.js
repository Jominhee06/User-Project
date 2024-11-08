import React, { useState } from 'react';
import './ExclusiveContent.css';

function ExclusiveContent() {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        setIsSubscribed(true);
    };

    const handleUnsubscribe = () => {
        setIsSubscribed(false);
    };

    return (
        <div className="exclusive-content">
            <h2>팬 전용 콘텐츠</h2>
            {isSubscribed ? (
                <div className="exclusive-video">
                    <video controls>
                        <source src="/video/박혜원.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* 구독 완료 후 메시지 추가 */}
                    <div className="subscription-message">
                        <p>구독해주셔서 감사합니다! 즐겁게 감상하세요.</p>
                    </div>
                    {/* 구독 취소 버튼 추가 */}
                    <button onClick={handleUnsubscribe} className="unsubscribe-button">
                        구독 취소
                    </button>
                </div>
            ) : (
                <div className="subscribe-prompt">
                    <p>팬 전용 콘텐츠를 보려면 구독이 필요합니다.</p>
                    <button onClick={handleSubscribe} className="subscribe-button">
                        구독하기
                    </button>
                    {/* 구독 전 미리보기 이미지 추가 */}
                    <div className="preview-image">
                        <img src="https://i1.sndcdn.com/avatars-DLkkGhVKZXYW6ixB-lOyz3A-t500x500.jpg" alt="Preview" />
                    </div>
                </div>
            )}

            {/* 구독 관리 페이지로 링크 추가 */}
            <div className="subscribe-management">
                <button onClick={() => window.location.href = '/my-subscription'} className="manage-subscription-button">
                    내 구독 관리
                </button>
            </div>
        </div>
    );
}

export default ExclusiveContent;



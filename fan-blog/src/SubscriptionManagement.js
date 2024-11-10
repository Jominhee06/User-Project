import React, { useState } from 'react';
import './SubscriptionManagement.css';

function SubscriptionManagement() {
    const [isSubscribed, setIsSubscribed] = useState(true); // 기본적으로 구독되어 있다고 가정

    const handleUnsubscribe = () => {
        setIsSubscribed(false);
    };

    const handleResubscribe = () => {
        setIsSubscribed(true);
    };

    return (
        <div className="subscription-management">
            <h2>내 구독 관리</h2>
            {isSubscribed ? (
                <div className="subscription-status">
                    <p>현재 구독 중입니다.</p>
                    <button onClick={handleUnsubscribe} className="unsubscribe-button">
                        구독 취소
                    </button>
                </div>
            ) : (
                <div className="subscription-status">
                    <p>현재 구독이 취소되었습니다.</p>
                    <button onClick={handleResubscribe} className="resubscribe-button">
                        구독 재개
                    </button>
                </div>
            )}
        </div>
    );
}

export default SubscriptionManagement;

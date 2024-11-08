import React, { useEffect } from 'react';
import './PushNotification.css';

function PushNotification() {
    useEffect(() => {
        if ('Notification' in window && 'serviceWorker' in navigator) {
            // 서비스 워커 등록
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('Service Worker 등록 성공:', registration);

                // 알림 권한 요청
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        // 서비스 워커를 통해 푸시 알림을 보낼 수 있는 상태가 됨
                        registration.showNotification('새로운 콘텐츠가 업데이트되었습니다!');
                    }
                });
            }).catch(error => {
                console.error('서비스 워커 등록 실패:', error);
            });
        }
    }, []);

    return (
        <div className="push-notification">
            <h3>알림 기능</h3>
            <p>새로운 콘텐츠가 업로드될 때마다 알림을 받을 수 있습니다!</p>
        </div>
    );
}

export default PushNotification;




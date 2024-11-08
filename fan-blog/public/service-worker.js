self.addEventListener('push', (event) => {
    const options = {
        body: event.data.text(),  // 푸시 알림에 표시할 텍스트
        icon: '/icon.png',  // 아이콘을 지정할 수 있습니다
        badge: '/badge.png',  // 배지 아이콘을 지정할 수 있습니다
        image: '/images/content-image.jpg',  // 푸시 알림에 이미지 추가

        actions: [
            {
                action: 'view',
                title: '콘텐츠 보기',
            },
            {
                action: 'dismiss',  // 버튼 클릭 시 실행할 액션 이름
                title: '닫기',  // 버튼에 표시할 텍스트
                icon: '/close-icon.png',  // 버튼에 사용할 아이콘
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('새로운 콘텐츠', options)
    );
});

// 알림에서 버튼을 클릭했을 때의 동작 처리
self.addEventListener('notificationclick', (event) => {
    const action = event.action;
    if (action === 'view') {
        clients.openWindow('https://example.com/new-content');  // 특정 URL로 이동
    } else if (action === 'dismiss') {
        event.notification.close();  // 알림 닫기
    }
});

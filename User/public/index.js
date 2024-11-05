const darkModeToggle = document.getElementById('darkModeToggle');
let isDarkMode = false; // 다크 모드 초기값

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode; // 다크 모드 상태 반전
    document.body.classList.toggle('dark-mode', isDarkMode); // 다크 모드 클래스 추가/제거

    // 버튼 텍스트 변경
    if (isDarkMode) {
        darkModeToggle.textContent = '라이트 모드'; // 다크 모드일 때
    } else {
        darkModeToggle.textContent = '다크 모드'; // 기본 모드일 때
    }
});

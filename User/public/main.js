// 로딩 애니메이션을 보여주고 페이지가 로드된 후 숨기는 코드
document.getElementById("loading").style.display = "block"; // 로딩 스피너 표시

window.onload = function() {
    document.getElementById("loading").style.display = "none"; // 페이지가 로드되면 로딩 스피너 숨김
};

// 여기에서 추가적인 JavaScript 기능을 추가할 수 있습니다.
// 예를 들어 버튼 클릭 이벤트, AJAX 요청 등을 처리할 수 있습니다.

// 예: 로그인 버튼 클릭 시 이벤트 처리
const loginButton = document.querySelector('.top-button[aria-label="로그인"]');
if (loginButton) {
    loginButton.addEventListener('click', function() {
        // 로그인 로직 또는 페이지 전환 로직을 여기에 추가
        console.log('로그인 버튼 클릭됨');
    });
}

// 예: 회원가입 버튼 클릭 시 이벤트 처리
const registerButton = document.querySelector('.top-button[aria-label="회원가입"]');
if (registerButton) {
    registerButton.addEventListener('click', function() {
        // 회원가입 로직 또는 페이지 전환 로직을 여기에 추가
        console.log('회원가입 버튼 클릭됨');
    });
}

// 예: 레시피 목록 버튼 클릭 시 이벤트 처리
const recipesButton = document.querySelector('.top-button[aria-label="레시피 목록"]');
if (recipesButton) {
    recipesButton.addEventListener('click', function() {
        // 레시피 목록 페이지로 전환하는 로직을 여기에 추가
        console.log('레시피 목록 버튼 클릭됨');
    });
}

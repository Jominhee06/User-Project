const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const nextToStep2 = document.getElementById('nextToStep2');
const nextToStep3 = document.getElementById('nextToStep3');
const nextToStep4 = document.getElementById('nextToStep4');
const backToStep1 = document.getElementById('backToStep1');
const backToStep2 = document.getElementById('backToStep2');
const backToStep3 = document.getElementById('backToStep3');
const submitRecipe = document.getElementById('submitRecipe');
const recipesList = document.getElementById('recipesList');
const errorMessage = document.getElementById('errorMessage');
const recipeSection = document.getElementById('recipeSection');
const logoutButton = document.getElementById('logoutButton');
const steps = document.querySelectorAll('.step');
let token = localStorage.getItem('token');
let currentStep = 0;

// 로그인 버튼 클릭
loginButton.addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    errorMessage.style.display = 'none'; // 에러 메시지 초기화

    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const data = await response.json();
        token = data.token;
        localStorage.setItem('token', token); // 토큰 저장
        alert('로그인 성공');
        recipeSection.style.display = 'block'; // 레시피 섹션 보이기
        showStep(1); // 첫 단계 보이기
        logoutButton.style.display = 'block'; // 로그아웃 버튼 보이기
    } else {
        errorMessage.textContent = '로그인 실패: 사용자 이름 또는 비밀번호가 잘못되었습니다.';
        errorMessage.style.display = 'block';
    }
});

// 회원가입 버튼 클릭
registerButton.addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        alert('사용자가 등록되었습니다.');
    } else {
        alert('등록 실패');
    }
});

// 단계 전환 함수
function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle('active', index === step);
    });
    currentStep = step; // 현재 단계 업데이트
}

// 다음 단계
nextToStep2.addEventListener('click', () => showStep(1));
nextToStep3.addEventListener('click', () => showStep(2));
nextToStep4.addEventListener('click', () => showStep(3));

// 이전 단계
backToStep1.addEventListener('click', () => showStep(0));
backToStep2.addEventListener('click', () => showStep(1));
backToStep3.addEventListener('click', () => showStep(2));

// 레시피 제출
submitRecipe.addEventListener('click', async () => {
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    const response = await fetch('http://localhost:5000/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, category, ingredients, instructions }),
    });

    if (response.ok) {
        alert('레시피가 추가되었습니다.');
        loadRecipes();
    } else {
        alert('레시피 추가 실패');
    }
});

// 레시피 로드
async function loadRecipes() {
    const response = await fetch('http://localhost:5000/recipes', {
        headers: { 'Authorization': `Bearer ${token}` },
    });

    if (response.ok) {
        const recipes = await response.json();
        recipesList.innerHTML = recipes.map(recipe => `
            <div>
                <h3>${recipe.title}</h3>
                <p>카테고리: ${recipe.category}</p>
                <p>재료: ${recipe.ingredients}</p>
                <p>조리법: ${recipe.instructions}</p>
                <button onclick="editRecipe(${recipe.id})">수정</button>
                <button onclick="deleteRecipe(${recipe.id})">삭제</button>
            </div>
        `).join('');
    } else if (response.status === 401) {
        alert('인증 실패. 다시 로그인하세요.');
        localStorage.removeItem('token');
        window.location.reload();
    } else {
        alert('레시피 로드 실패');
    }
}

// 로그아웃
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.reload();
});

// 배경 색상 변경 함수
function changeBackgroundColor() {
    const colorPicker = document.getElementById('bgColor');
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor; // 선택한 색상으로 배경 변경
}

// 첫 단계만 보이도록 설정
showStep(currentStep);







  
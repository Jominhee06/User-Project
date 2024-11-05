document.getElementById('loginButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
        alert(result.message); // 로그인 성공
        window.location.href = '/'; // 로그인 후 메인 페이지로 리디렉션
    } else {
        document.getElementById('errorMessage').textContent = result.message; // 오류 메시지 출력
    }
});

// 로그아웃 기능
document.getElementById('logoutButton').addEventListener('click', async () => {
    const response = await fetch('/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();

    if (response.ok) {
        alert(result.message); // 로그아웃 성공
        window.location.href = '/login.html'; // 로그아웃 후 로그인 페이지로 리디렉션
    } else {
        alert('로그아웃 실패'); // 로그아웃 실패 시 메시지
    }
});






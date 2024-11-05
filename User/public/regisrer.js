document.getElementById('registerButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
        alert(result.message); // 등록 성공
        window.location.href = '/login.html'; // 등록 후 로그인 페이지로 리디렉션
    } else {
        document.getElementById('errorMessage').textContent = result.message; // 오류 메시지 출력
    }
});

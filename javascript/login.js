const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Username dan password tidak boleh kosong!');
        return;
    }

    if (username !== 'admin' || password !== 'admin') {
        alert('Username atau password salah!');
        return;
    }

    window.location.href = 'Dashboard.html';
});

document.addEventListener('DOMContentLoaded', function() {
    // Prijava forma
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log('Prijava:', username, password);
        });
    }

    // Registracija forma
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('reg-username').value;
            const password = document.getElementById('reg-password').value;
            console.log('Registracija:', username, password);
        });
    }

    // Dodavanje društva forma
    const addSocietyForm = document.getElementById('add-society-form');
    if (addSocietyForm) {
        addSocietyForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            console.log('Dodaj društvo:', name);
        });
    }
});

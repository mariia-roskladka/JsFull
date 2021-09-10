export function finishForm() {
    const form = document.querySelector('.login-form');
    const inputLogin = document.createElement('input');
    inputLogin.type = 'text';
    inputLogin.name = 'login';
    form.prepend(inputLogin);
    const inputPassword = document.querySelector('input[name = "password"]');
    inputPassword.type = 'password';
}
finishForm();
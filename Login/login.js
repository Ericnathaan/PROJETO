AOS.init();


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    // Adicione um evento de envio ao formulário de login
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o envio padrão do formulário

        // Recupera os dados do usuário do Local Storage
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData) {
            const storedEmail = storedUserData.email;
            const storedPassword = storedUserData.password;

            // Verifica se o email e a senha correspondem aos dados armazenados
            if (emailInput.value === storedEmail && passwordInput.value === storedPassword) {
                window.location.href = '../index.html';
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        } else {
            alert('Você ainda não se cadastrou. Redirecionando para a página de cadastro.');
            window.location.href = '../cadastro/cadastro.html';
        }
    });
});





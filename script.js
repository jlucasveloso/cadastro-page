document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login');
    const registerForm = document.querySelector('.register');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');

    // Mostrar formulário de login por padrão
    loginForm.classList.add('active');

    // Alternar para o formulário de cadastro
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    // Alternar para o formulário de login
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // Manipular envio do formulário de login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Aqui você pode adicionar a lógica de autenticação
        console.log('Login:', { email, password });
    });

    // Manipular envio do formulário de cadastro
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validar se as senhas coincidem
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }
        
        // Aqui você pode adicionar a lógica de cadastro
        console.log('Cadastro:', { name, email, password });
    });
}); 

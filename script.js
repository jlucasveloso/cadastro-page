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

    // Função para controlar o comportamento dos labels
    function handleInputFocus(input) {
        const label = input.nextElementSibling;
        if (input.value === '') {
            label.style.color = 'rgba(102, 102, 102, 0.3)';
        }
    }

    function handleInputBlur(input) {
        const label = input.nextElementSibling;
        if (input.value === '') {
            label.style.color = '#666';
        }
    }

    function handleInput(input) {
        const label = input.nextElementSibling;
        if (input.value !== '') {
            label.style.transition = 'none';
            label.style.opacity = '0';
            label.style.visibility = 'hidden';
        } else {
            label.style.transition = 'color 0.3s';
            label.style.opacity = '1';
            label.style.visibility = 'visible';
            label.style.color = '#666';
        }
    }

    // Adicionar eventos para todos os inputs
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('focus', () => handleInputFocus(input));
        input.addEventListener('blur', () => handleInputBlur(input));
        input.addEventListener('input', () => handleInput(input));
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

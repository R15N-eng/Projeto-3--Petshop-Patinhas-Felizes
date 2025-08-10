function togglePasswordVisibility(id) {
    const passwordInput = document.getElementById(id);
    const icon = passwordInput.nextElementSibling.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const pfRadio = document.getElementById('pessoa-fisica');
    const pjRadio = document.getElementById('pessoa-juridica');
    const pfFields = document.getElementById('pf-fields');
    const pjFields = document.getElementById('pj-fields');
    const form = document.getElementById('registration-form');

    function toggleFields() {
        if (pjRadio.checked) {
            pfFields.classList.add('hidden');
            pjFields.classList.remove('hidden');

            // Desabilita required dos campos de PF
            pfFields.querySelectorAll('[required]').forEach(el => el.removeAttribute('required'));
            // Ativa required nos campos de PJ
            pjFields.querySelectorAll('input, select').forEach(el => {
                if (el.hasAttribute('data-required')) {
                    el.setAttribute('required', '');
                }
            });

        } else {
            pjFields.classList.add('hidden');
            pfFields.classList.remove('hidden');

            // Desabilita required dos campos de PJ
            pjFields.querySelectorAll('[required]').forEach(el => el.removeAttribute('required'));
            // Ativa required nos campos de PF
            pfFields.querySelectorAll('input, select').forEach(el => {
                if (el.hasAttribute('data-required')) {
                    el.setAttribute('required', '');
                }
            });
        }
    }

    // Marcar todos os required que podem ser dinâmicos com data-required
    document.querySelectorAll('#pf-fields [required], #pj-fields [required]').forEach(el => {
        el.setAttribute('data-required', 'true');
    });

    pfRadio.addEventListener('change', toggleFields);
    pjRadio.addEventListener('change', toggleFields);
    toggleFields();

    // Validação de senha
    const passwordInput = document.getElementById('senha');
    const confirmPasswordInput = document.getElementById('confirmar-senha');
    const lengthRule = document.getElementById('length-rule');
    const uppercaseRule = document.getElementById('uppercase-rule');
    const lowercaseRule = document.getElementById('lowercase-rule');
    const numberRule = document.getElementById('number-rule');

    function validatePassword() {
        const password = passwordInput.value;
        const hasLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        lengthRule.style.color = hasLength ? 'green' : 'red';
        uppercaseRule.style.color = hasUppercase ? 'green' : 'red';
        lowercaseRule.style.color = hasLowercase ? 'green' : 'red';
        numberRule.style.color = hasNumber ? 'green' : 'red';

        return hasLength && hasUppercase && hasLowercase && hasNumber;
    }

    function validatePasswordMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity('As senhas não coincidem.');
        } else {
            confirmPasswordInput.setCustomValidity('');
        }
    }

    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePasswordMatch);

    form.addEventListener('submit', (event) => {
        if (!validatePassword() || passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();
            alert('Por favor, corrija os erros do formulário.');
        } else {
            event.preventDefault(); // Impede o envio real
            alert('Conta criada! Seja Bem vindo a família Patinhas Felizes!');
            form.reset();
            toggleFields(); // Reseta para o estado inicial
        }
    });
});

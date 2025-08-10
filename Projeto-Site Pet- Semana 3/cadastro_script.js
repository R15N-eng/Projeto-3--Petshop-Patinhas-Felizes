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
            
            function toggleFields() {
                if (pjRadio.checked) {
                    pfFields.classList.add('hidden');
                    pjFields.classList.remove('hidden');
                } else {
                    pfFields.classList.remove('hidden');
                    pjFields.classList.add('hidden');
                }
            }
            
            pfRadio.addEventListener('change', toggleFields);
            pjRadio.addEventListener('change', toggleFields);
            
            toggleFields();

            // Validação de Senha e Confirmação de Senha
            const passwordInput = document.getElementById('senha');
            const confirmPasswordInput = document.getElementById('confirmar-senha');
            const form = document.getElementById('registration-form');
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
                    event.preventDefault(); // Impede o envio do formulário
                    alert('Por favor, corrija os erros do formulário.');
                }
            });
        });
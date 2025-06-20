document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Fonctionnalité d'étiquette flottante
     const inputs = document.querySelectorAll('.input-group input');
     inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.querySelector('label').classList.add('active');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentNode.querySelector('label').classList.remove('active');
            }
        });
         // Initialize labels if inputs have values
        if (input.value !== '') {
            input.parentNode.querySelector('label').classList.add('active');
        }
     });

      // Form validation

       form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

         // Email validation
         if(!validateEmail(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.parentNode.classList.add('error');
            isValid = false; 
         } else {
            emailError.style.display = 'none';
            emailInput.parentNode.classList.remove('error');
         }

          // Password validation
          if (passwordInput.value.length < 6) {
            passwordError.style.display = 'block';
            passwordInput.parentNode.classList.add('error');
            isValid = false;
          } else {
             passwordError.style.display = 'none';
            passwordInput.parentNode.classList.remove('error');
          }

          if (isValid) {
              // Simulate successful login
              document.querySelector('.login-button').textContent = 'Loging in...';

              setTimeout(() => {
                alert('Login successful!');
                form.reset();
                document.querySelector('.login-button').textContent = 'Login';
                
                // Remove active class from labels
                inputs.forEach(input => {
                     input.parentNode.querySelector('label').classList.remove('active');
                });
              }, 1500);
          }
       });


       function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.text(email);
       }

       // Add ripple effect to login button
       const loginButton = document.querySelector('.login-button');
       loginButton.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${X}px`;
        ripple.style.top = `${Y}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1000);

       });

});


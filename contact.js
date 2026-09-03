    // Mobile Menu Toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });
        
        // Form validation and submission
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const submitLoading = document.getElementById('submitLoading');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');
        
        // Input elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Error messages
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        
        // Validate email format
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        // Show error for an input
        function showError(input, errorElement) {
            input.classList.add('input-error');
            errorElement.style.display = 'block';
        }
        
        // Hide error for an input
        function hideError(input, errorElement) {
            input.classList.remove('input-error');
            errorElement.style.display = 'none';
        }
        
        // Validate form inputs
        function validateForm() {
            let isValid = true;
            
            // Validate name
            if (nameInput.value.trim() === '') {
                showError(nameInput, nameError);
                isValid = false;
            } else {
                hideError(nameInput, nameError);
            }
            
            // Validate email
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
                showError(emailInput, emailError);
                isValid = false;
            } else {
                hideError(emailInput, emailError);
            }
            
            // Validate message
            if (messageInput.value.trim() === '') {
                showError(messageInput, messageError);
                isValid = false;
            } else {
                hideError(messageInput, messageError);
            }
            
            return isValid;
        }
        
        // Event listeners for input fields to clear errors on input
        nameInput.addEventListener('input', () => hideError(nameInput, nameError));
        emailInput.addEventListener('input', () => hideError(emailInput, emailError));
        messageInput.addEventListener('input', () => hideError(messageInput, messageError));
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide any previous messages
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
            
            // Validate form
            if (!validateForm()) {
                return;
            }
            
            // Show loading indicator
            submitBtn.disabled = true;
            submitLoading.style.display = 'inline-block';
            
            // Simulate form submission (replace with actual form submission)
            setTimeout(() => {
                // Hide loading indicator
                submitLoading.style.display = 'none';
                submitBtn.disabled = false;
                
                // Show success message (in real scenario, this would happen after API response)
                successMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }, 1500);
        });
        
        // Interactive elements for contact icons
        const contactItems = document.querySelectorAll('.contact-item');
        
        contactItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const icon = item.querySelector('.icon-container i');
                icon.classList.add('fa-beat');
                
                setTimeout(() => {
                    icon.classList.remove('fa-beat');
                }, 800);
            });
        });
        
        // Social icons animation
        const socialIcons = document.querySelectorAll('.social-icon');
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                const iconElement = icon.querySelector('i');
                iconElement.classList.add('fa-bounce');
                
                setTimeout(() => {
                    iconElement.classList.remove('fa-bounce');
                }, 800);
            });
        });
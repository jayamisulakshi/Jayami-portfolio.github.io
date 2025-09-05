// Typing Effect for Hero Section
document.addEventListener('DOMContentLoaded', function() {
            const typingText = document.querySelector('.typing-text');
            const words = ['Software Engineer', 'Web Developer', 'UI/UX Designer', 'Freelancer'];
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingDelay = 100;
            let erasingDelay = 50;
            let newWordDelay = 1000;

            function type() {
                const currentWord = words[wordIndex];
                
                if (isDeleting) {
                    // Remove char
                    typingText.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                    typingDelay = erasingDelay;
                } else {
                    // Add char
                    typingText.textContent = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                    typingDelay = 100;
                }

                // Check if word is complete
                if (!isDeleting && charIndex === currentWord.length) {
                    isDeleting = true;
                    typingDelay = newWordDelay;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    typingDelay = 200;
                }

                setTimeout(type, typingDelay);
            }

            // Start typing effect
            setTimeout(type, 1000);

            // Mobile Navigation Toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Close mobile nav when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });

            // Animate skill bars on scroll
            const skillBars = document.querySelectorAll('.progress-bar');
            
            function animateSkillBars() {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }

            // Use Intersection Observer to trigger animation when skills section is in view
            const skillsSection = document.getElementById('skills');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkillBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            if (skillsSection) {
                observer.observe(skillsSection);
            }

            // Form submission (front-end only)
            const contactForm = document.querySelector('.contact-form');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Simple validation
                if (name && email && message) {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    alert('Please fill in all fields.');
                }
            });
        });
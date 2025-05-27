// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (name && email && message) {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Add some interactive hover effects
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        const subtitleEl = document.getElementById('subtitle');
        const subtitles = ["I am a Web Developer", "I am a UI/UX Designer"];
        let index = 0;

        const roles = ["Web Developer", "UI/UX Designer", "Frontend Engineer"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const roleSpan = document.getElementById("animated-role");

        function typeEffect() {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                charIndex--;
                roleSpan.textContent = currentRole.substring(0, charIndex);
            } else {
                charIndex++;
                roleSpan.textContent = currentRole.substring(0, charIndex);
            }

            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => isDeleting = true, 1500); // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

            setTimeout(typeEffect, isDeleting ? 50 : 100); // Speed settings
        }

        typeEffect();



        // Parallax effect for hero section
        //window.addEventListener('scroll', function() {
        //    const scrolled = window.pageYOffset;
        //    const hero = document.querySelector('.hero');
        //    if (hero) {
        //        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        //    }
        //});
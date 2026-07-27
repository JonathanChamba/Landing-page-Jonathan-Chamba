        document.addEventListener('DOMContentLoaded', () => {
            // Animaciones de Fade-Up usando Intersection Observer
            const fadeElements = document.querySelectorAll('.fade-up');

            const appearOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const appearOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, appearOptions);

            fadeElements.forEach(el => {
                appearOnScroll.observe(el);
            });

            // Efecto Header (Sombra al hacer scroll)
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
                    header.style.padding = '0';
                } else {
                    header.style.boxShadow = 'none';
                    header.style.padding = '0';
                }
            });
        });

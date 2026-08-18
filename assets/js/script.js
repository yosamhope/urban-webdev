document.addEventListener('DOMContentLoaded', function() {
    const supportsObserver = 'IntersectionObserver' in window;

    if (supportsObserver) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll, .benefits-section, .process-section, .cta-section, .pricing-card, .project-card, .content-section, .mission-card, .team-member').forEach((el) => {
            observer.observe(el);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will respond shortly.');
            form.reset();
        })
    }

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thanks for subscribing! You\'ll hear from us soon.');
            newsletterForm.reset();
        });
    }

    // ISO-standard hamburger menu toggle for mobile media queries
    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!isOpen));
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', function (e) {
            if (!navLinks.classList.contains('active')) return;
            if (navLinks.contains(e.target) || hamburger.contains(e.target)) return;
            hamburger.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
        });
    }
});
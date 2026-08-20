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

        document.querySelectorAll('.animate-on-scroll, .benefits-section, .process-section, .cta-section, .pricing-card, .project-card, .content-section, .mission-card, .team-member, .visual-card, .stat-tile.image-tile').forEach((el) => {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support: reveal immediately
        document.querySelectorAll('.visual-card, .stat-tile.image-tile').forEach((el) => {
            el.classList.add('visible');
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

    // Services nav dropdown: caret toggles the submenu without navigating (desktop hover
    // already reveals it via CSS; this adds a reliable tap/click toggle for touch devices)
    document.querySelectorAll('.nav-dropdown .dropdown-caret').forEach(function (caret) {
        caret.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = caret.closest('.nav-dropdown');
            if (dropdown) {
                dropdown.classList.toggle('dropdown-open');
            }
        });
    });

    document.addEventListener('click', function (e) {
        document.querySelectorAll('.nav-dropdown.dropdown-open').forEach(function (dropdown) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('dropdown-open');
            }
        });
    });

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
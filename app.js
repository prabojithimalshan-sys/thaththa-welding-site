// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Since no backend, just show an alert
    alert(`Thank you, ${name}! Your message has been received. We will contact you at ${phone} soon.`);

    // Clear the form
    contactForm.reset();
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
});

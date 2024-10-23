// Header-Home JS Start
document.addEventListener('DOMContentLoaded', () => {
    const roles = ["Programmer", "Mern-Stack Dev", "Full-Stack Dev"];
    let index = 0;
    const typingElement = document.querySelector('.typing');

    function typeText(text, i, callback) {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            setTimeout(() => typeText(text, i + 1, callback), 100);
        } else if (callback) {
            setTimeout(callback, 1000);
        }
    }

    function deleteText(callback) {
        let text = typingElement.textContent;
        if (text.length > 0) {
            typingElement.textContent = text.substring(0, text.length - 1);
            setTimeout(() => deleteText(callback), 50);
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }

    function rotateText() {
        typeText(roles[index], 0, () => {
            deleteText(() => {
                index = (index + 1) % roles.length;
                rotateText();
            });
        });
    }

    rotateText();

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    // Header-Home JS End


    // About JS Start
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');
    const skills = document.querySelectorAll('.skill');
    const projectCards = document.querySelectorAll('.project-card');
    const projectWrappers = document.querySelectorAll('.project-wrapper');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(aboutLeft);
    observer.observe(aboutRight);

    skills.forEach(skill => observer.observe(skill));
    projectCards.forEach(card => observer.observe(card));
    projectWrappers.forEach(wrapper => observer.observe(wrapper));

    // Scroll to top button
    const scrollUpBtn = document.getElementById('scrollUpBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpBtn.style.display = "block";
        } else {
            scrollUpBtn.style.display = "none";
        }
    };

    scrollUpBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.contact__left, .contact__form-container').forEach(el => {
        observer.observe(el);
    });
});

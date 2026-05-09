window.addEventListener("scroll", function () {
    const header = this.document.getElementById('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let i = 1;
let j = 1;
let isDeleting = false

const words = ["Python'", "Web Dev'", "Sever Hosting'"]


function typingEffect() {
    const typingEffectID = document.getElementById('typing-effect');
    const currentWord = words[i];

    // Typing phase
    if (!isDeleting) {
        typingEffectID.textContent = currentWord.slice(0, j++);
        if (j > currentWord.length) {
            isDeleting = true;
            setTimeout(typingEffect, 2000); // Pause before deleting
            return;
        }
    }
    // Deleting phase
    else {
        typingEffectID.textContent = currentWord.slice(0, j--);
        if (j < 1) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(typingEffect, isDeleting ? 60 : 100); // speed
}

typingEffect();

const sections = document.querySelectorAll('.main-box, .project-box, .contact-box');

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('reveal');
        } else {
            section.classList.remove('reveal');
        }
    });
}

// Run once on load
window.addEventListener('load', revealOnScroll);

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

const achievements = document.querySelectorAll(".achievement");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2
});

achievements.forEach((item) => observer.observe(item));


window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

let i = 1;
let j = 1;
let isDeleting = false;

const words = ["Resume'", "About Me'", "Experience'"];

function typingEffect() {
    const typingEffectID = document.getElementById("typing-effect");
    const currentWord = words[i];

    if (!typingEffectID) return;

    if (!isDeleting) {
        typingEffectID.textContent = currentWord.slice(0, j++);
        if (j > currentWord.length) {
            isDeleting = true;
            setTimeout(typingEffect, 2000);
            return;
        }
    } else {
        typingEffectID.textContent = currentWord.slice(0, j--);
        if (j < 1) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(typingEffect, isDeleting ? 60 : 100);
}

typingEffect();

const sections = document.querySelectorAll(".main-box, .project-box, .contact-box");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("reveal");
        } else {
            section.classList.remove("reveal");
        }
    });
}

window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

function createScrollObserver(selector, threshold = 0.2) {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: threshold
    });

    elements.forEach(el => observer.observe(el));
}

const DEFAULT_THRESHOLD = 0.2;

createScrollObserver(".achievement", DEFAULT_THRESHOLD);
createScrollObserver(".about-me-desc", DEFAULT_THRESHOLD);
createScrollObserver(".about-me-header h2", DEFAULT_THRESHOLD);
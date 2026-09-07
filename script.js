// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ===============================
// CLOSE MOBILE MENU
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ===============================
// TYPING EFFECT
// ===============================

const typing = document.querySelector(".typing");

const words = [
    "Web Developer",
    "Software Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

    }

    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length) {

        speed = 1500;

        deleting = true;

    } else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// SKILL ANIMATION
// ===============================

const skillBars =
    document.querySelectorAll(".skill-progress");

const skillObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.width =
                    entry.target.dataset.width;

            }

        });

    });


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you for contacting me! I will get back to you soon."
    );

    contactForm.reset();

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// BACK TO TOP
// ===============================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
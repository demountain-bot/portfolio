/* =========================================
   PRELOADER
========================================= */
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    }, 800);
});

/* =========================================
   MOBILE NAVIGATION TOGGLE
========================================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

/* =========================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================= */
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("open");
    });
});

/* =========================================
   STICKY NAVBAR SHADOW ON SCROLL
========================================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

/* =========================================
   SMOOTH SCROLLING
========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* =========================================
   ACTIVE NAVIGATION LINK ON SCROLL
========================================= */
const sections = document.querySelectorAll("section");
const navMenuLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navMenuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */
const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .about-text"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

/* =========================================
   TYPING EFFECT
========================================= */
const typingText = [
    "Operations Professional",
    "Project Support Specialist",
    "Tech Enthusiast",
    "AI Automation Learner",
    "Process Improvement Advocate"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero-content h2");

function typeEffect() {

    if (!typingElement) return;

    if (charIndex < typingText[textIndex].length) {

        typingElement.textContent += typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            typingText[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 40);

    } else {

        textIndex++;

        if (textIndex >= typingText.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if (typingElement) {
        typingElement.textContent = "";
        typeEffect();
    }
});

/* =========================================
   DARK MODE TOGGLE
========================================= */
const darkModeToggle = document.createElement("button");

darkModeToggle.innerHTML = "🌙";
darkModeToggle.classList.add("dark-mode-toggle");

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        darkModeToggle.innerHTML = "☀️";

    } else {

        darkModeToggle.innerHTML = "🌙";
    }
});

/* =========================================
   BACK TO TOP BUTTON
========================================= */
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

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

/* =========================================
   PROJECT CARD HOVER EFFECT
========================================= */
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

/* =========================================
   DYNAMIC CURRENT YEAR IN FOOTER
========================================= */
const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `&copy; ${currentYear} Adetunji Adeyemo. All Rights Reserved.`;
}

/* =========================================
   CONSOLE MESSAGE
========================================= */
console.log(
    "%cPortfolio Website Loaded Successfully",
    "color: #38bdf8; font-size: 16px; font-weight: bold;"
);
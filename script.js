// ===============================
// KIRAN ACADEMY - MAIN JAVASCRIPT
// ===============================


// 1. NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


// 2. SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// 3. ANIMATED COUNTERS
// ===============================

const counters = document.querySelectorAll(".stat h2");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const originalText = counter.innerText;

            const number = parseInt(originalText.replace(/\D/g, ""));

            const suffix = originalText.replace(/[0-9]/g, "");

            let current = 0;

            const increment = Math.ceil(number / 80);

            const timer = setInterval(() => {

                current += increment;

                if (current >= number) {

                    current = number;

                    clearInterval(timer);

                }

                counter.innerText = current + suffix;

            }, 25);

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


// 4. SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".course-card, .feature, .journey div, .why-content, .image-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// 5. COURSE CARD CLICK
// ===============================

const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach(card => {

    card.addEventListener("click", () => {

        const courseName = card.querySelector("h3").innerText;

        alert(
            "You selected: " +
            courseName +
            "\n\nCourse details will be available soon!"
        );

    });

});


// 6. BOOK FREE DEMO BUTTON
// ===============================

const demoButtons = document.querySelectorAll(
    ".nav-btn, .secondary-btn, .cta .primary-btn"
);

demoButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "🎓 Free Demo Class\n\n" +
            "Thank you for your interest in The Kiran Academy!\n\n" +
            "Our team will contact you shortly."
        );

    });

});


// 7. EXPLORE COURSES BUTTON
// ===============================

const exploreButton = document.querySelector(".hero .primary-btn");

if (exploreButton) {

    exploreButton.addEventListener("click", () => {

        document.querySelector("#courses").scrollIntoView({
            behavior: "smooth"
        });

    });

}


// 8. MOUSE PARALLAX EFFECT
// ===============================

const heroCircle = document.querySelector(".main-circle");

if (heroCircle) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 40;

        const y = (window.innerHeight / 2 - e.clientY) / 40;

        heroCircle.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


// 9. CURRENT YEAR IN FOOTER
// ===============================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerText =
        `© ${year} The Kiran Academy. All Rights Reserved.`;

}


// 10. PAGE LOADED MESSAGE
// ===============================

console.log(
    "🚀 The Kiran Academy website is ready!"
);
/* ==========================================
   SHAIKH AMMAR PORTFOLIO
   script.js (Part 1)
========================================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

/* ==========================
   CUSTOM CURSOR
========================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================
   ACTIVE NAVBAR
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* ==========================
   HEADER SHADOW
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.boxShadow="0 5px 25px rgba(0,229,255,.15)";

    }

    else{

        header.style.boxShadow="none";

    }

});

/* ==========================
   BUTTON RIPPLE EFFECT
========================== */

const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px) scale(1)";

    });

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("%cWelcome to Shaikh Ammar's Portfolio 💻",

"color:#00E5FF;font-size:20px;font-weight:bold;");

console.log("%cCyber Security Portfolio Loaded Successfully",

"color:#00FFC6;font-size:14px;");
/* ==========================================
   TYPING EFFECT
========================================== */

const typingText = document.querySelector(".typing");

const words = [

    "Aspiring Cyber Security Engineer",

    "Ethical Hacking Learner",

    "Web Developer",

    "Problem Solver"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingText.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 40 : 90);

}

typeEffect();


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

".skill-card,.project-box,.about-card,.about-text,.timeline-item,.certificate-card,.resume-card,.contact-form,.github-card"

);

function revealOnScroll(){

    const trigger = window.innerHeight * .85;

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < trigger){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/* ==========================================
   PROJECT CARD HOVER
========================================== */

const projects = document.querySelectorAll(".project-box");

projects.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background=

        `radial-gradient(circle at ${x}px ${y}px,

        rgba(0,229,255,.18),

        rgba(16,23,42,.95))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.05)";

    });

});


/* ==========================================
   SKILL CARD FLOAT
========================================== */

const skillCards=document.querySelectorAll(".skill-card");

skillCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-15px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/* ==========================================
   PARALLAX HERO
========================================== */

window.addEventListener("mousemove",(e)=>{

    const hero=document.querySelector(".hero");

    const x=(window.innerWidth/2-e.pageX)/35;

    const y=(window.innerHeight/2-e.pageY)/35;

    hero.style.transform=

    `translate(${x}px,${y}px)`;

});


/* ==========================================
   FOOTER YEAR
========================================== */

const year = new Date().getFullYear();

const footer = document.querySelector("footer p:nth-child(3)");

if(footer){

footer.innerHTML=

`© ${year} All Rights Reserved.`;

}


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(

"%cAccess Granted ✔",

"color:#00ff99;font-size:16px;font-weight:bold"

);

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

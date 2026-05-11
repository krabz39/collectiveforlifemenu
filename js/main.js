/* ========================================= */
/* MAIN CATEGORY SWITCHING */
/* COFFEE ↔ PASTRIES */
/* ========================================= */

const mainTabs = document.querySelectorAll(".main-tab");
const mainCategories = document.querySelectorAll(".main-category");

mainTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        /* REMOVE ACTIVE MAIN TAB */
        mainTabs.forEach((btn) => {
            btn.classList.remove("active-main");
        });

        /* ACTIVATE CURRENT MAIN TAB */
        tab.classList.add("active-main");

        /* TARGET */
        const target = tab.dataset.main;

        /* HIDE ALL MAIN CATEGORIES */
        mainCategories.forEach((category) => {
            category.classList.remove("active-main-category");
        });

        /* SHOW TARGET */
        const activeMain = document.getElementById(target);

        if(activeMain){
            activeMain.classList.add("active-main-category");
        }

    });

});

/* ========================================= */
/* COFFEE SUB CATEGORY SWITCHING */
/* ========================================= */

const tabs = document.querySelectorAll(".menu-tabs button");
const categories = document.querySelectorAll(".menu-category");

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        /* REMOVE ACTIVE */
        tabs.forEach((btn) => {
            btn.classList.remove("active");
        });

        /* ADD ACTIVE */
        tab.classList.add("active");

        /* TARGET */
        const target = tab.dataset.category;

        /* HIDE ALL */
        categories.forEach((category) => {
            category.classList.remove("active-category");
        });

        /* SHOW TARGET */
        const activeCategory = document.getElementById(target);

        if(activeCategory){
            activeCategory.classList.add("active-category");
        }

    });

});

/* ========================================= */
/* MENU CARD HOVER */
/* ========================================= */

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });

});

/* ========================================= */
/* NAVBAR SCROLL EFFECT */
/* ========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.06)";

        navbar.style.background =
        "rgba(255,255,255,0.92)";

    }else{

        navbar.style.boxShadow = "none";

        navbar.style.background =
        "rgba(255,255,255,0.75)";
    }

});

/* ========================================= */
/* HERO PARALLAX */
/* ========================================= */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    if(window.innerWidth > 992){

        const x =
        (window.innerWidth / 2 - e.pageX) / 60;

        const y =
        (window.innerHeight / 2 - e.pageY) / 60;

        heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

    }

});

/* ========================================= */
/* MOBILE TAB CENTERING */
/* ========================================= */

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        if(window.innerWidth <= 768){

            tab.scrollIntoView({
                behavior:"smooth",
                inline:"center",
                block:"nearest"
            });

        }

    });

});

mainTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        if(window.innerWidth <= 768){

            tab.scrollIntoView({
                behavior:"smooth",
                inline:"center",
                block:"nearest"
            });

        }

    });

});
/* ========================================= */
/* AUTO SCROLL TO MENU ON LOAD */
/* ========================================= */

window.addEventListener("load", () => {

    const menuSection =
    document.querySelector(".menu-section");

    if(menuSection){

        setTimeout(() => {

            menuSection.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }, 1200);

    }

});
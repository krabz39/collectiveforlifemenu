const revealItems = document.querySelectorAll(
".menu-card, .story-card, .timeline-item"
);

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", () => {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

});
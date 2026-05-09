const sliderDot = document.querySelector(".slider-dot");
const sliderFill = document.querySelector(".slider-fill");
const sliderTrack = document.querySelector(".slider-track");

let isDragging = false;

sliderDot.addEventListener("mousedown", () => {
    isDragging = true;
});

window.addEventListener("mouseup", () => {
    isDragging = false;
});

window.addEventListener("mousemove", (e) => {

    if(!isDragging) return;

    const rect = sliderTrack.getBoundingClientRect();

    let x = e.clientX - rect.left;

    if(x < 0) x = 0;
    if(x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;

    sliderDot.style.left = percent + "%";
    sliderFill.style.width = percent + "%";

});
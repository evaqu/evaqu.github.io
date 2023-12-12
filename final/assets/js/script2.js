let carouselWidth3 = 400;
let prevButton3 = document.getElementById("button-previous-2");
let nextButton3 = document.getElementById("button-next-2");
let imageRow3 = document.getElementById("carousel-image-row-2");
let imageNum3 = 0;

prevButton3.classList.add("hidden");

function showNextImage3() {
    imageNum3++;
    let offset3 = -imageNum3 * carouselWidth3;
    imageRow3.style.left = offset3 + "px";
    checkControls3();
}

nextButton3.onclick = showNextImage3;

function showPrevImage3() {
    imageNum3--;
    let offset3 = -imageNum3 * carouselWidth3;
    imageRow3.style.left = offset3 + "px";
    checkControls3();
}

prevButton3.onclick = showPrevImage3;

let totalImages3 = document.getElementsByClassName("carousel-image-2").length;

function checkControls3() {
    if (imageNum3 === 0) {
        prevButton3.classList.add("hidden");
    } else if (prevButton3.classList.contains("hidden")) {
        prevButton3.classList.remove("hidden");
    }
    if (imageNum3 === totalImages3 - 1) {
        nextButton3.classList.add("hidden");
    } else if (nextButton3.classList.contains("hidden")) {
        nextButton3.classList.remove("hidden");
    }
}


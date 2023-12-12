let carouselWidth2 = 400;
let prevButton2 = document.getElementById("button-previous-1");
let nextButton2 = document.getElementById("button-next-1");
let imageRow2 = document.getElementById("carousel-image-row-1");
let imageNum2 = 0;

prevButton2.classList.add("hidden");

function showNextImage2() {
    imageNum2++;
    let offset2 = -imageNum2 * carouselWidth2;
    imageRow2.style.left = offset2 + "px";
    checkControls2();
}

nextButton2.onclick = showNextImage2;

function showPrevImage2() {
    imageNum2--;
    let offset2 = -imageNum2 * carouselWidth2;
    imageRow2.style.left = offset2 + "px";
    checkControls2();
}

prevButton2.onclick = showPrevImage2;

let totalImages2 = document.getElementsByClassName("carousel-image-1").length;

function checkControls2() {
    if (imageNum2 === 0) {
        prevButton2.classList.add("hidden");
    } else if (prevButton2.classList.contains("hidden")) {
        prevButton2.classList.remove("hidden");
    }
    if (imageNum2 === totalImages2 - 1) {
        nextButton2.classList.add("hidden");
    } else if (nextButton2.classList.contains("hidden")) {
        nextButton2.classList.remove("hidden");
    }
}



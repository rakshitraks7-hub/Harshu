/* ===============================
   WAIT FOR PAGE TO LOAD
=================================*/
document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bgMusic");
    const toggleBtn = document.getElementById("musicToggle");

    /* ===============================
       MUSIC TOGGLE BUTTON
    =================================*/
    if (toggleBtn && music) {
        toggleBtn.addEventListener("click", function () {
            if (music.paused) {
                music.play();
                toggleBtn.innerHTML = "🔊";
            } else {
                music.pause();
                toggleBtn.innerHTML = "🔇";
            }
        });

        /* Auto start music on first user interaction */
        document.addEventListener("click", function () {
            if (music.paused) {
                music.play().catch(() => {});
            }
        }, { once: true });
    }

    /* ===============================
       FLOATING BACKGROUND HEARTS
    =================================*/
    const heartContainer = document.getElementById("floatingHearts");

    function createFloatingHeart() {
        if (!heartContainer) return;

        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createFloatingHeart, 800);

});


/* ===============================
   PAGE NAVIGATION (IFRAME)
=================================*/
function loadPage(page) {
    const frame = document.getElementById("contentFrame");
    if (frame) {
        frame.src = page;
    }
}


/* ===============================
   ENTER SITE (Intro Button)
=================================*/
function enterSite() {
    const music = document.getElementById("bgMusic");
    const intro = document.getElementById("intro");

    if (music) music.play().catch(() => {});
    if (intro) intro.style.display = "none";
}


/* ===============================
   HEART EXPLOSION EFFECT
=================================*/
function heartExplosion() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💗";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = "20px";
        heart.style.animation = "floatUp 2s linear forwards";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}


/* ===============================
   LIGHTBOX (Gallery)
=================================*/
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImg");

    if (lightbox && img) {
        lightbox.style.display = "flex";
        img.src = src;
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}


/* ===============================
   SLIDESHOW (Gallery)
=================================*/
let currentSlide = 0;
let slideshowInterval = null;

function startSlideshow() {
    const images = document.querySelectorAll(".polaroid img");

    if (!images.length) return;

    if (slideshowInterval) return; // prevent multiple intervals

    slideshowInterval = setInterval(() => {
        images[currentSlide].click();
        currentSlide = (currentSlide + 1) % images.length;
    }, 2500);
}

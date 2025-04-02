document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    // Efek scroll pada header
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", function () {
        requestAnimationFrame(handleScroll);
    });

    // Toggle menu dropdown untuk mobile
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Tutup menu jika klik di luar menu
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});

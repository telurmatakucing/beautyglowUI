document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const menuItems = document.querySelectorAll("nav ul li a"); // Pilih <a> dalam <li>

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
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah klik mempengaruhi elemen lain
        navMenu.classList.toggle("active");
    });

    // Tutup menu jika klik di luar menu
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });

    // Tutup menu setelah item diklik & arahkan ke halaman lain
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah default link action (jika ingin smooth transition)
            
            let targetId = this.getAttribute("href").substring(1); // Ambil ID target dari href (tanpa tanda #)
            const targetSection = document.getElementById(targetId); // Dapatkan section berdasarkan ID
            
            navMenu.classList.remove("active"); // Sembunyikan menu

            // Scroll dengan efek halus ke section tujuan
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Tambahkan event listener untuk tombol "Sign Up" agar menggulir ke section signup
    const signupButton = document.querySelector(".signup"); // Tombol Sign Up
    signupButton.addEventListener("click", function () {
        const signUpSection = document.getElementById("signup");
        signUpSection.scrollIntoView({ behavior: "smooth" }); // Scroll dengan efek halus ke section signup
    });
});

// Ambil element navbar
const navbar = document.querySelector('.navigation');

// Fungsi update navbar
function updateNavbar() {
   if (window.scrollY > 50) { // Mulai efek setelah scroll 50px
      navbar.classList.add('scrolled');
   } else {
      navbar.classList.remove('scrolled');
   }
}

// Event listener untuk scroll
window.addEventListener('scroll', updateNavbar);

// Panggil fungsi saat pertama kali load
updateNavbar();
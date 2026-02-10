// ============================
// SCROLL ANIMATION
// ============================
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // stop observe setelah muncul
        }
    });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));
// ============================
// LANGUAGE SYSTEM
// ============================
function setLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = lang === 'en'
            ? el.getAttribute('data-en')
            : el.getAttribute('data-id');
    });

    localStorage.setItem('lang', lang);
}

// AUTO LANGUAGE DETECTION
(function autoLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        setLanguage(savedLang);
        return;
    }

    const browserLang = navigator.language || navigator.userLanguage;

    if (browserLang.startsWith('id')) {
        setLanguage('id');
    } else {
        setLanguage('en');
    }
})();
function showCatalog(type) {

  // sembunyikan semua katalog
  document.querySelectorAll('.catalog-group').forEach(group => {
    group.style.display = 'none';
  });

  // tampilkan katalog sesuai klik
  const target = document.querySelector('.catalog-group.' + type);
  if (target) {
    target.style.display = 'block';
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
function openModal(title, img, desc, spec) {
    const modal = document.getElementById("productModal");
    if (!modal) return;

    document.getElementById("modalTitle").innerHTML = title;
    document.getElementById("modalImg").src = img;
    document.getElementById("modalDesc").innerHTML = desc;
    document.getElementById("modalSpec").innerHTML = spec;

    const message = encodeURIComponent(
      "Hello, I would like to request a quotation for:\n" + title
    );

    document.getElementById("quoteBtn").href =
      "https://wa.me/6285159106671?text=" + message;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

window.onclick = function(e) {
    const modal = document.getElementById("productModal");
    if (e.target === modal) {
        closeModal();
    }
};
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});



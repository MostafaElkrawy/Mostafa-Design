// AOS Animation
AOS.init({
  duration: 1200,
  once: true
});

// Active navbar عند الضغط
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// Active navbar مع Scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
// Parallax effect
window.addEventListener("scroll", function () {
  const header = document.querySelector(".sub-header");
  if(header) {
    let scrollY = window.scrollY;
    header.style.backgroundPositionY = `${scrollY * 0.5}px`;
  }
});

// AOS Initialization
AOS.init({
  duration: 1200,
  once: true
});



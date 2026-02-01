const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.style.color = "#e5e7eb";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#22c55e";
    }
  });
});

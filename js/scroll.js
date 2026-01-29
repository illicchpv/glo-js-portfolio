
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    seamless.scrollIntoView(target, {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
});

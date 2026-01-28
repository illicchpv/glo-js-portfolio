const accordeon = document.querySelector(".feature-list");
const accordeonButtons = accordeon.querySelectorAll(".feature__link");

accordeonButtons.forEach((btn) => {
  btn.addEventListener("click", () => {

    // Закрываем все другие аккордеоны
    accordeonButtons.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("feature__link_active");
        otherBtn.nextElementSibling.classList.add("hidden");
      }
    });
    
    btn.classList.toggle("feature__link_active");
    btn.nextElementSibling.classList.toggle("hidden");
  });
});

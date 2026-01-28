const moreButtons = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");
const closeButtons = document.querySelectorAll(".modal__close");

moreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal();
  });
});

function closeModal() {
  modal.classList.add("hidden");
}
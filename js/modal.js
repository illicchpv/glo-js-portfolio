const moreButtons = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");
const modalOverlay = modal.querySelector(".overlay");
const closeButtons = document.querySelectorAll(".modal__close");

moreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
});

modalOverlay.addEventListener("click", () => {
  closeModal();
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal();
  });
});

function closeModal() {
  modal.classList.add("hidden");
}
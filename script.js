// ===== script.js =====

document.addEventListener("DOMContentLoaded", () => {
  const learnBtn = document.getElementById("learnMoreBtn");
  if (learnBtn) {
    learnBtn.addEventListener("click", () => {
      window.location.href = "#about";
    });
  }

  // При отправке формы — показать сообщение
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Спасибо! Ваша заявка отправлена 😊");
      form.reset();
    });
  }
});

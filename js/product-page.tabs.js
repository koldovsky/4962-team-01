// Не потрібно слухати жодних подій —
// цей файл імпортується тільки після того,
// як product-page.js підтвердив що всі partials завантажені
const tabButtons = document.querySelectorAll(".tabs__nav-button");
const tabContents = document.querySelectorAll(".tabs__pane");

console.log("Tabs script loaded");
console.log(`Tab buttons: ${tabButtons.length}`); // буде 2 ✅
console.log(`Tab contents: ${tabContents.length}`); // буде 2 ✅

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove("tabs__nav-button--active");
      btn.setAttribute("aria-selected", "false");
    });

    tabContents.forEach((content) => {
      content.classList.remove("tabs__pane--active");
    });

    button.classList.add("tabs__nav-button--active");
    button.setAttribute("aria-selected", "true");

    const targetId = button.dataset.target;
    const targetPane = document.querySelector(`[data-pane="${targetId}"]`);
    if (targetPane) targetPane.classList.add("tabs__pane--active");
  });
});

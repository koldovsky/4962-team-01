const tabButtons = document.querySelectorAll(".tabs__nav-button");
const tabContents = document.querySelectorAll(".tabs__pane");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove("tabs__nav-button--active");
    });
    tabContents.forEach((content) => {
      content.classList.remove("tabs__pane--active");
    });
    button.classList.add("tabs__nav-button--active");
    const targetId = button.dataset.target; // дістаємо назву (напр. 'specs')
    document.querySelector(`[data-pane="${targetId}"]`).classList.add("tabs__pane--active"); // показуємо блок
  });
});

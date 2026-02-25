function init() {
  import("./product-page.tabs.js");
  import("./product-page.gallery.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterSettle", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

console.log("Main product page script loaded"); // перевірка, що скрипт завантажився
function init() {
  import("./product.tabs.js");
  import("./product-page.gallery.js");
}

// Проблема: page-content.partial.html сам містить вкладені htmx-завантаження
// (breadcrumbs, gallery, product-info, product-tabs).
// Тому реальна кількість htmx:afterSettle подій більша за кількість
// верхньорівневих partials — init() викликався до того як вкладені партіали
// з'явились у DOM.
//
// Рішення: debounce — init() викликається через 100мс після ОСТАННЬОГО
// htmx:afterSettle. Якщо прийде ще одна подія до спрацювання таймера,
// відлік починається заново. Так гарантуємо що весь DOM готовий.
let initTimer;
document.body.addEventListener("htmx:afterSettle", () => {
  clearTimeout(initTimer);
  initTimer = setTimeout(init, 100);
});

console.log("Main product page script loaded"); // перевірка, що скрипт завантажився
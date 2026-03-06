function init() {
  import("./global.header_nav.js");
  import("./global.footer.js");
  import("./index.section-testimonials.partial.js");
  import("./products-section-tabs.js");
  import("./index.subscription.partial.js");
  import("./index.hash-navigation.js");
  import("./products-order.js");
  import("./order.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

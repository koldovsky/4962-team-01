function init() {
  import("./global.header_nav.js");
  import("./index.section-testimonials.partial.js");
  import("./products-section-tabs.js");
  import("./index.subscription.partial.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

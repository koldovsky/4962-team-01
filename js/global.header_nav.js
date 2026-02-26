const burger = document.querySelector(".header__burger");

const mobilePanel = document.querySelector(".header__nav-mobile");

const mobileLinks = document.querySelectorAll(".header__mobile-link")


burger.addEventListener("click", () => {
  mobilePanel.classList.toggle("nav-mobile__is-active");

  let documentOverflow = document.documentElement.style.overflow;
  document.documentElement.style.overflow =
    documentOverflow === "hidden" ? "auto" : "hidden";
});

for (const link of mobileLinks) {
  link.addEventListener("click", () => {
    document.documentElement.style.overflow = "auto";
    mobilePanel.classList.remove("nav-mobile__is-active");
  });
}

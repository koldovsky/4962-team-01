let burger = document.querySelector(".header__burger");

let mobilePanel = document.querySelector(".header__nav-mobile")




burger.addEventListener("click", () => {
    mobilePanel.classList.toggle("nav-mobile__is-active");
    
    let documentOverflow =  document.documentElement.style.overflow;
    document.documentElement.style.overflow = documentOverflow === "hidden" ? "auto" : "hidden";
});
document.querySelectorAll(".toggle-text").forEach((header) => {
  header.addEventListener("click", () => {
    const hiddenText = header.nextElementSibling;
    hiddenText.classList.toggle("show");
    header.classList.toggle("active");
  });
});

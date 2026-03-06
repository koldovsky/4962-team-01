// intercept clicks on any product-card button, read the surrounding
// card's name/price/image and store the product in localStorage.  Navigate
// to the real order page (order-page.html).

const buttons = document.querySelectorAll(".product-card__button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".product-card");
    if (!card) return;

    const nameEl = card.querySelector(".product-card__title");
    const priceEl = card.querySelector(".product-card__price");
    const imgEl = card.querySelector(".product-card__image");

    const product = {
      name: nameEl ? nameEl.textContent.trim() : "",
      price: priceEl ? priceEl.textContent.trim() : "",
      image: imgEl ? imgEl.src : ""
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    // correct path to the order page – not "order.html" which doesn't exist
    window.location.href = "order-page.html";
  });
});
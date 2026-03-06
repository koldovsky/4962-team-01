const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
    document.querySelector(".order__product-name").textContent = product.name;
    document.querySelector(".order__product-price").textContent = product.price;
    document.querySelector(".order__price").textContent = product.price;
    document.querySelector(".order__product-image").src = product.image;
}
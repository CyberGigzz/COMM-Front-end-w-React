document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <div class="product-title">${product.title}</div>
        <div class="product-category">${product.category}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-price">Price: $${product.price}</div>
        <div class="product-rating">Rating: ${product.rating.rate} (${product.rating.count} reviews)</div>
      `;

    productContainer.appendChild(productDiv);
  });
});

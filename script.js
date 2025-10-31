// PRODUCTS AND THEIR PRIMARY DETAILS

const products = [
  {
    id: 1,
    name: "Men  White Sneakers",
    price: 999,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHPI1Ilsk571Zv3AocF8MyMRj-p6GhewV7Q&s",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1499,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBZBrerhHGoyMk4fiKjLL41XfXpgyke9ELw&s",
  },
  {
    id: 3,
    name: "Power Bank",
    price: 2599,
    img: "https://5.imimg.com/data5/SELLER/Default/2025/7/529694922/BB/CY/QB/246609346/portable-battery-charger.jpg",
  },
  {
    id: 4,
    name: "Bicycle",
    price: 12999,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJVFns2Z53t_pPyERu8mvDKmiBjEa5Y5Cvw&s",
  },
  {
    id: 5,
    name: "Teddy Bear",
    price: 1399,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghfmpSS65DfwiwmIR-FiqyYGh6utqgccwSg&s",
  },

  {
    id: 6,
    name: "Classic Itra",
    price: 799,
    img: "data:image/jpeg;base64,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",
  },
];

// SELECT ELEMENTS

const productContainer = document.getElementById("productContainer");
const cartModal = document.getElementById("cartModal");
const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartItemsList = document.getElementById("cartItems");

let cart = [];

// DISPLAY PRODUCTS

function displayProducts() {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <button class="addBtn" data-id="${product.id}">Add to Cart</button>
    `;
    productContainer.appendChild(card);
  });
}

// ADD EVENT LISTENERS

function setupEventListeners() {
  document.querySelectorAll(".addBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      addToCart(id);
    });
  });
}

// ADD TO CART

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  updateCart();
  alert(`${product.name} added to cart!`);
}

// FOR SUM OF ALL THE PRICES OF CART ITEMS
function updateCart() {
  cartItemsList.innerHTML = ""; // clear previous cart list
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ₹${item.price}`;
    cartItemsList.appendChild(li);
    total += parseFloat(item.price); // ✅ add up price correctly
  });

  //FOR REFLECTING TOTAL ON PAGE
  const totalAmountElement = document.getElementById("totalAmount");
  if (totalAmountElement) {
    totalAmountElement.textContent = total.toFixed(2);
  }
}

// CART MODAL CONTROL

cartBtn.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for shopping with ShopSense!!");
  cart = [];
  updateCart();
  cartModal.classList.add("hidden");
});

//  FOR INIT

displayProducts();
setupEventListeners();

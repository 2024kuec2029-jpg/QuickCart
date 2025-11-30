/* Product catalog: common Indian grocery items with image URLs.
   You can replace any image URL with your own working URL. */

const PRODUCTS = [
  {
    id: "tomato",
    name: "Fresh Tomatoes",
    category: "vegetables",
    price: 45,
    unit: "1 kg",
    tag: "Daily essential",
    
    image: "https://tse3.mm.bing.net/th/id/OIP.JJhRCdcbDVHgd7cCnaz0_gHaEo?pid=Api&P=0&h=180"
  },
  {
    id: "potato",
    name: "New Crop Potatoes",
    category: "vegetables",
    price: 32,
    unit: "1 kg",
    tag: "Most ordered",
    image: "https://tse1.mm.bing.net/th/id/OIP._uP6Hdomrz9wErl4DP8ccwHaE8?pid=Api&P=0&h=180"
  },
  {
    id: "onion",
    name: "Red Onions",
    category: "vegetables",
    price: 38,
    unit: "1 kg",
    tag: "Kitchen basic",
    image: "https://tse2.mm.bing.net/th/id/OIP.cZeDlpf2wB5AdmCcm8d1BAHaHa?pid=Api&P=0&h=180"
  },
  {
    id: "bhindi",
    name: "Bhindi (Okra)",
    category: "vegetables",
    price: 55,
    unit: "500 g",
    tag: "Fresh today",
    image: "https://cdn.britannica.com/60/157660-050-99656755/Okra-fruits-section.jpg"
  },
  {
    id: "capsicum",
    name: "Green Capsicum",
    category: "vegetables",
    price: 70,
    unit: "500 g",
    tag: "Crisp and fresh",
    image: "https://tse1.mm.bing.net/th/id/OIP.N_UTJyTBRl0-SEYOuMJ3DwHaHa?pid=Api&P=0&h=180"
  },
  {
    id: "banana",
    name: "Bananas (Robusta)",
    category: "fruits",
    price: 60,
    unit: "1 dozen",
    tag: "Popular choice",
    image: "https://tse4.mm.bing.net/th/id/OIP.gmaNCW8ul-WofFZqWr1NEgHaE7?pid=Api&P=0&h=180"
  },
  {
    id: "apple",
    name: "Kashmiri Apples",
    category: "fruits",
    price: 180,
    unit: "1 kg",
    tag: "Premium",
    image: "https://images.heb.com/is/image/HEBGrocery/000375146-1?$article-235-square$"
  },
  {
    id: "orange",
    name: "Nagpur Oranges",
    category: "fruits",
    price: 120,
    unit: "1 kg",
    tag: "Seasonal",
    image: "https://tse3.mm.bing.net/th/id/OIP.DsdFEw2-2VUE_4Krmzo1agHaFj?pid=Api&P=0&h=180"
  },
  {
    id: "grapes",
    name: "Green Grapes",
    category: "fruits",
    price: 140,
    unit: "500 g",
    tag: "Seedless",
    image: "https://tse2.mm.bing.net/th/id/OIP.4cNLG1Jw79BQF7mRpMImUgHaEK?pid=Api&P=0&h=180"
  },
  {
    id: "basmati",
    name: "Basmati Rice",
    category: "staples",
    price: 649,
    unit: "5 kg pack",
    tag: "Family pack",
    image: "https://www.mashed.com/img/gallery/the-ultimate-guide-to-basmati-rice/l-intro-1677794298.jpg"
  },
  {
    id: "atta",
    name: "Chakki Fresh Atta",
    category: "staples",
    price: 329,
    unit: "5 kg pack",
    tag: "Best seller",
    image: "https://m.media-amazon.com/images/I/9104JpXbv6L._SL1500_.jpg"
  },
  {
    id: "toor-dal",
    name: "Toor Dal",
    category: "staples",
    price: 165,
    unit: "1 kg",
    tag: "Top rated",
    image: "http://5.imimg.com/data5/VU/FW/MY-17256771/toor-dal.jpg"
  },
  {
    id: "moong-dal",
    name: "Moong Dal",
    category: "staples",
    price: 155,
    unit: "1 kg",
    tag: "High protein",
    image: "https://thekeralaspices.co.in/wp-content/uploads/2024/05/MoongDalBlog-1.jpg"
  },
  {
    id: "sugar",
    name: "Refined Sugar",
    category: "staples",
    price: 48,
    unit: "1 kg",
    tag: "Everyday",
    image: "https://i.pinimg.com/originals/b6/34/1c/b6341c2cc6009b68bc1bbe50bad8ba47.jpg"
  },
  {
    id: "salt",
    name: "Iodised Salt",
    category: "staples",
    price: 24,
    unit: "1 kg",
    tag: "Essential",
    image: "https://www.tastingtable.com/img/gallery/everything-you-need-to-know-about-salt/intro-1674742362.jpg"
  },
  {
    id: "sunflower-oil",
    name: "Sunflower Oil",
    category: "staples",
    price: 189,
    unit: "1 litre",
    tag: "Kitchen basic",
    image: "https://myhealthopedia.com/wp-content/uploads/2025/04/Sunflower-Oil-1.jpg"
  },
  {
    id: "milk",
    name: "Toned Milk",
    category: "dairy",
    price: 58,
    unit: "1 litre",
    tag: "Fresh daily",
    image: "https://www.bigbasket.com/media/uploads/p/l/306926_4-amul-homogenised-toned-milk.jpg"
  },
  {
    id: "curd",
    name: "Fresh Dahi",
    category: "dairy",
    price: 65,
    unit: "400 g cup",
    tag: "Rich and thick",
    image: "https://goqii.com/blog/wp-content/uploads/Healthy-Eating-homemade-curd.jpg"
  },
  {
    id: "paneer",
    name: "Paneer Cubes",
    category: "dairy",
    price: 95,
    unit: "200 g",
    tag: "Soft texture",
    image: "https://www.recipetineats.com/wp-content/uploads/2021/02/Homemade-Paneer-recipe_3.jpg"
  },
  {
    id: "butter",
    name: "Salted Butter",
    category: "dairy",
    price: 235,
    unit: "500 g",
    tag: "Creamy",
    image: "https://cdn.britannica.com/27/122027-050-EAA86783/Butter.jpg"
  },
  {
    id: "namkeen",
    name: "Mixture Namkeen",
    category: "snacks",
    price: 75,
    unit: "200 g",
    tag: "Tea-time",
    image: "https://img.freepik.com/premium-photo/indian-traditional-namkeen-food-mixture-navratna-mix-namkeen-also-know-as-nimco-namkin-mixture-chiwda-nimko-served-bowl-selective-focus_726363-910.jpg?w=1380"
  },
  {
    id: "chips",
    name: "Classic Salted Chips",
    category: "snacks",
    price: 35,
    unit: "90 g pack",
    tag: "Bestseller",
    image: "https://facts.net/wp-content/uploads/2023/12/20-facts-about-chips-1702019686.jpg"
  },
  {
    id: "biscuits",
    name: "Digestive Biscuits",
    category: "snacks",
    price: 45,
    unit: "250 g pack",
    tag: "Light snack",
    image: "https://tse2.mm.bing.net/th/id/OIP.ht9eTnh-Y_womcdFkDTfbgAAAA?pid=Api&P=0&h=180"
  },
  {
    id: "soap",
    name: "Bath Soap Bar",
    category: "personal-care",
    price: 35,
    unit: "100 g bar",
    tag: "Personal care",
    image: "https://www.boredpanda.com/blog/wp-content/uploads/2025/05/sydney-sweeney-soap-bathwater-683958abaafe6__700.jpg"
  },
  {
    id: "shampoo",
    name: "Shampoo Sachets",
    category: "personal-care",
    price: 10,
    unit: "Pack of 6",
    tag: "Travel friendly",
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680182932-l-oreal-elvive-clay-shampoo-64258e8283a72.png?crop=1xw:1xh;center,top&resize=980:*"
  },
  {
    id: "detergent",
    name: "Detergent Powder",
    category: "personal-care",
    price: 120,
    unit: "1 kg",
    tag: "Home care",
    image: "https://i5.walmartimages.com/seo/Tide-Liquid-Laundry-Detergent-Original-64-Loads-92-fl-oz-HE-Compatible_f946cf37-7bb9-4b11-af74-355ead2084c0.edbd9b8b8ef5bb0940bf43e269d5c759.jpeg"
  }
];



const CART_KEY = "quickcart-cart-v1";
let cart = loadCart();

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function getCartCount() {
  return Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return Object.values(cart).reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}
function handleRegister() {
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }
  const users = JSON.parse(localStorage.getItem("users") || "{}");
  if (users[email]) {
    alert("User already exists. Try logging in.");
    return;
  }
  users[email] = btoa(password);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", email);
  alert("Account created successfully!");
  window.location.href = "index.html";
}

function handleLoginAuth() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const users = JSON.parse(localStorage.getItem("users") || "{}");
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }
  if (!users[email]) {
    alert("Account not found. Please register first.");
    return;
  }
  if (users[email] !== btoa(password)) {
    alert("Incorrect password");
    return;
  }
  localStorage.setItem("loggedInUser", email);
  alert("Login successful!");
  window.location.href = "index.html";
}




function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
      <span class="product-tag">${product.tag}</span>
    </div>
    <div class="product-body">
      <div class="product-name">${product.name}</div>
      <div class="product-meta">${product.unit} • ${product.category}</div>
      <div class="product-footer">
        <span class="price">₹${product.price}</span>
        <button class="btn-add" data-product-id="${product.id}">Add</button>
      </div>
    </div>
  `;
  return card;
}

function renderProductGrid(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { category = "all", query = "", limit = null } = options;

  let list = PRODUCTS.slice();

  if (category !== "all") {
    list = list.filter(p => p.category === category);
  }

  if (query) {
    const q = query.toLowerCase();
    list = list.filter(
      p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }

  if (limit) {
    list = list.slice(0, limit);
  }

  container.innerHTML = "";
  list.forEach(product => {
    container.appendChild(createProductCard(product));
  });

  container.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", () => addToCart(btn.dataset.productId));
  });
}



function updateCartCount() {
  const countEl = document.querySelector(".cart-count");
  if (!countEl) return;
  const count = getCartCount();
  countEl.textContent = count;
}

function openCart() {
  const overlay = document.querySelector(".cart-overlay");
  if (!overlay) return;
  renderCartItems();
  overlay.style.display = "flex";
}

function closeCart() {
  const overlay = document.querySelector(".cart-overlay");
  if (!overlay) return;
  overlay.style.display = "none";
}

function renderCartItems() {
  const listEl = document.querySelector(".cart-items");
  const totalEl = document.querySelector(".cart-total-amount");
  if (!listEl || !totalEl) return;

  listEl.innerHTML = "";

  const cartItems = Object.values(cart);
  if (cartItems.length === 0) {
    listEl.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return;
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div>
          <div class="cart-item-title">${product.name}</div>
          <div style="font-size:12px;color:#6a7282;">₹${product.price} × ${item.qty}</div>
        </div>
        <div class="cart-item-controls">
          <button class="cart-item-qty-btn" data-action="dec" data-id="${item.id}">-</button>
          <span>${item.qty}</span>
          <button class="cart-item-qty-btn" data-action="inc" data-id="${item.id}">+</button>
        </div>
      `;
      listEl.appendChild(row);
    });
  }

  totalEl.textContent = "₹" + getCartTotal();

  listEl.querySelectorAll(".cart-item-qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === "inc") changeQuantity(id, 1);
      else changeQuantity(id, -1);
    });
  });
}

function changeQuantity(productId, delta) {
  const existing = cart[productId];
  if (!existing) return;
  existing.qty += delta;
  if (existing.qty <= 0) {
    delete cart[productId];
  }
  saveCart();
  renderCartItems();
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (!cart[productId]) {
    cart[productId] = { id: productId, qty: 1 };
  } else {
    cart[productId].qty += 1;
  }
  saveCart();
}



function handleLogin() {
  const emailInput = document.getElementById("login-email");
  const passInput = document.getElementById("login-password");
  if (!emailInput || !passInput) return;

  const email = emailInput.value.trim();
  const password = passInput.value.trim();
  if (!email || !password) return;

  localStorage.setItem("loggedInUser", email);
  window.location.href = "index.html";
}

function handleLogout() {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}

function updateLoginUI() {
  const email = localStorage.getItem("loggedInUser");
  const loginLink = document.getElementById("login-link");
  const greeting = document.getElementById("greeting");
  if (!loginLink || !greeting) return;

  if (email) {
    greeting.textContent = "Hi, " + email;
    loginLink.textContent = "Logout";
    loginLink.href = "#";
    loginLink.onclick = handleLogout;
  } else {
    greeting.textContent = "";
    loginLink.textContent = "Login";
    loginLink.href = "login.html";
    loginLink.onclick = null;
  }
}



document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("home-featured")) {
    renderProductGrid("home-featured", { limit: 6 });
  }

  if (document.getElementById("all-products")) {
    renderProductGrid("all-products");
  }

  const searchInput = document.getElementById("product-search");
  const chips = document.querySelectorAll(".chip[data-category]");

  if (searchInput || chips.length) {
    let currentCategory = "all";
    let currentQuery = "";

    function refreshGrid() {
      renderProductGrid("all-products", {
        category: currentCategory,
        query: currentQuery
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", e => {
        currentQuery = e.target.value.trim();
        refreshGrid();
      });
    }

    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        currentCategory = chip.dataset.category;
        refreshGrid();
      });
    });
  }

  const cartBtn = document.querySelector(".cart-icon");
  if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
  }

  const overlay = document.querySelector(".cart-overlay");
  const closeBtn = document.querySelector(".cart-close");

  if (overlay) {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) closeCart();
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCart);
  }

  const path = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === path || (href === "index.html" && path === "")) {
      link.classList.add("active");
    }
  });

  updateCartCount();
  updateLoginUI();
});

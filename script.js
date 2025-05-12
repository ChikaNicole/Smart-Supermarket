const products = [
  { id: 1, name: "苹果", price: 3.5, image: "https://source.unsplash.com/240x160/?apple" },
  { id: 2, name: "香蕉", price: 2.0, image: "https://source.unsplash.com/240x160/?banana" },
  { id: 3, name: "牛奶", price: 5.0, image: "https://source.unsplash.com/240x160/?milk" },
  { id: 4, name: "面包", price: 4.2, image: "https://source.unsplash.com/240x160/?bread" },
  { id: 5, name: "可乐", price: 3.8, image: "https://source.unsplash.com/240x160/?cola" },
  { id: 6, name: "洗衣液", price: 15.0, image: "https://source.unsplash.com/240x160/?detergent" }
];

const cart = [];

function renderProducts() {
  const list = document.getElementById("product-list");
  products.forEach(p => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>￥${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id})">加入购物车</button>
    `;
    list.appendChild(item);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
  renderCartItems();
}

function toggleCart() {
  const panel = document.getElementById("cart-panel");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function renderCartItems() {
  const ul = document.getElementById("cart-items");
  ul.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ￥${item.price.toFixed(2)}`;
    ul.appendChild(li);
  });
}

renderProducts();

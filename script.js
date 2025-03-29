// Product Data
const products = [
    { id: 1, name: "Laptop", price: 799, category: "Electronics", image: "https://tse3.mm.bing.net/th?id=OIP.WCCq2nZelTZuFIRbJF7AuAHaEK&pid=Api&P=0&h=180.jpg" },
    { id: 2, name: "Phone", price: 599, category: "Electronics", image: "https://tse2.mm.bing.net/th?id=OIP.Gcho6CdiGqoRg3F6ECUU3wHaJP&pid=Api&P=0&h=180.jpg" },
    { id: 3, name: "Shoes", price: 49, category: "Fashion", image: "https://tse2.mm.bing.net/th?id=OIP.eDPNgb3w3WIwj6L3JC5uMQHaIW&pid=Api&P=0&h=180.jpg" },
    { id: 4, name: "T-Shirt", price: 19, category: "Fashion", image: "https://tse1.mm.bing.net/th?id=OIP.DSjZPk9uy01_f2ox4Q5QPgAAAA&pid=Api&P=0&h=180.jpg" },
    { id: 5, name: "Headphones", price: 99, category: "Electronics", image: "https://tse3.mm.bing.net/th?id=OIP.SGt8I-OB3VfC_iGeyIHPlQHaHa&pid=Api&P=0&h=180.jpg" },
    { id: 6, name: "Smartwatch", price: 199, category: "Electronics", image: "https://tse2.mm.bing.net/th?id=OIP.o_f-JybqUc_S8T99Iqx1PgHaHa&pid=Api&P=0&h=180.jpg" },
    { id: 7, name: "Tablet", price: 399, category: "Electronics", image: "https://tse4.mm.bing.net/th?id=OIP.3HvKiC4BeP2QpDnbz4WTwQHaHa&pid=Api&P=0&h=180.jpg" },
    { id: 8, name: "Gaming Console", price: 499, category: "Electronics", image: "https://cdn.thewirecutter.com/wp-content/media/2020/10/gameconsoles-2048px-1011084-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024&dpr=2.jpg" },
    { id: 9, name: "Jeans", price: 39, category: "Fashion", image: "https://tse1.mm.bing.net/th?id=OIP.Ac2oPmd3Uu96QcE2GPGKlAHaJ4&pid=Api&P=0&h=180.jpg" },
    { id: 10, name: "Jacket", price: 89, category: "Fashion", image: "https://www.jacketsexpert.com/wp-content/uploads/2020/12/mens-brown-suede-shearling-jacket.jpg.jpg" },
    { id: 11, name: "Watch", price: 149, category: "Fashion", image: "https://tse1.mm.bing.net/th?id=OIP.UJUFBmC6xIWHxWYoyOQjQQHaHa&pid=Api&P=0&h=180.jpg" },
    { id: 12, name: "Blender", price: 99, category: "Home Appliances", image: "https://m.media-amazon.com/images/I/71SnJqMsF4L._SL1470_.jpg.jpg" },
    { id: 13, name: "Vacuum Cleaner", price: 199, category: "Home Appliances", image: "https://tse1.mm.bing.net/th?id=OIP.Uf93SSH9QUzFsXPXGFt2iwHaHa&pid=Api&P=0&h=180.jpg" },
    { id: 14, name: "Microwave Oven", price: 299, category: "Home Appliances", image: "https://tse1.mm.bing.net/th?id=OIP.wH-vtRySN8IozfQVJqR4YwHaHa&pid=Api&P=0&h=180.jpg" },
    { id: 15, name: "JavaScript Guide", price: 29, category: "Books", image: "https://tse3.mm.bing.net/th?id=OIP.nm7s-EpJ_OeUXvNq965p9gHaHa&pid=Api&P=0&h=180.jpg" },
    { id: 16, name: "Data Structures & Algorithms", price: 39, category: "Books", image: "https://pictures.abebooks.com/isbn/9780070667266-us.jpg" },
    { id: 17, name: "Fiction Novel", price: 19, category: "Books", image: "https://cdn2.penguin.com.au/covers/original/9780099579939.jpg" },
    { id: 18, name: "Perfume", price: 59, category: "Beauty", image: "https://tse2.mm.bing.net/th?id=OIP.bRh8xcsRshjDTUab8_1L9AHaHa&pid=Api&P=0&h=180.jpg" },
    { id: 19, name: "Face Cream", price: 29, category: "Beauty", image: "https://tse4.mm.bing.net/th?id=OIP._VkwU9DXgoaNfuduNQlKbgHaHa&pid=Api&P=0&h=180.jpg" },
    { id: 20, name: "Shampoo", price: 15, category: "Beauty", image: "https://tse3.mm.bing.net/th?id=OIP.B1MZ5a8P5gDK93XEC9-PxwHaHa&pid=Api&P=0&h=180.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to Display Products (Filtered)
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("product-list");
    if (!productList) return;
    productList.innerHTML = ""; // Clear existing products

    filteredProducts.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

// Function to Update Cart Count
function updateCart() {
    document.getElementById("cart-count").innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
}


// Function to Display Cart Items with Images
function displayCart() {
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");

    if (!cartList) return;

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        cartList.appendChild(div);
    });

    cartTotal.innerText = total.toFixed(2);
}


// Function to Add to Cart
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    let item = cart.find(i => i.id === productId);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();

    // Create message container
    const message = document.createElement('div');
    message.innerHTML = `${product.name} added to cart 🛒 
        <button id="goToCartBtn" style="margin-left:10px; padding:5px 10px; border:none; background:#fff; color:#000; border-radius:5px; cursor:pointer;">Go to Cart</button>`;
    
    message.style = 'position:fixed; top:20px; left:50%; transform:translateX(-50%); padding:10px; background: orange; color:white; border-radius:5px; z-index:1000; display:flex; align-items:center;';

    document.body.appendChild(message);

    // Add event listener to Go to Cart button
    document.getElementById('goToCartBtn').addEventListener('click', () => {
        window.location.href = "cart.html"; // Redirects to cart page
    });

    // Automatically remove the message after 1 second
    setTimeout(() => message.remove(), 2000);
}


// Function to Clear Cart
function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
    updateCart();
}

function buyNow() {
    if (cart.length === 0) {
        showTemporaryMessage("Your cart is empty! Add some products before purchasing.", "error");
        return;
    }
        showTemporaryMessage("Thank you for your purchase! Your order has been placed.", "success");

    // Simulate order processing (You can integrate a payment gateway here)
    clearCart(); // Clear cart after a successful purchase
    setTimeout(() => {
        window.location.href = "order-confirmation.html";
    }, 3000); // Redirect after 3 seconds
}

// Function to show a temporary message
function showTemporaryMessage(message, type) {
    let messageBox = document.createElement("div");
    messageBox.innerText = message;
    messageBox.className = `message-box ${type}`;
    document.body.appendChild(messageBox);

    // Automatically remove message after 3 seconds
    setTimeout(() => {
        messageBox.remove();
    }, 2000);
}



// Load cart items on page load
document.addEventListener("DOMContentLoaded", displayCart);

// Function to Filter Products
function filterProducts() {
    const searchText = document.getElementById("search").value.toLowerCase();
    const selectedCategory = document.getElementById("category").value;
    const maxPrice = document.getElementById("priceRange").value;
    document.getElementById("priceValue").innerText = `$${maxPrice}`;

    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchText) &&
            (selectedCategory === "all" || product.category === selectedCategory) &&
            product.price <= maxPrice
        );
    });

    displayProducts(filteredProducts);
}

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    displayProducts();
    displayCart();
    updateCart();
    displayAdvertisement();
});


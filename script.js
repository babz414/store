let imageSwitch = document.querySelector("#first-image");
let bars = document.getElementById("bars");
let navbar = document.getElementById("navbar");
let wholeNavbar = document.querySelector(".navbar");
let times = document.getElementById("times");
let carts = document.getElementById("cart");
let cartItems = document.querySelectorAll(".cart-items");
let cartAmount = document.querySelector("#cart-amount");
let cartAdded = document.querySelector("#cart-added");
let radio = document.getElementById("radio");
let hr = document.getElementById("hr");
let cipContainer = document.getElementById("cipcontainer");
let a = times.classList.contains("active");
let x = window.matchMedia("(max-width: 414px)");
let b = 1;
let timer;

for (let i = 0; i < 36; i++) {
  cartItems[i].addEventListener("click", function (e) {
    e.preventDefault();
    if (b < 37) {
      const k = b++;

      cartAmount.textContent = k;
      showNotificationBar();
      cartItems = cartItems[i].parentElement.classList.add("selected");
      console.log(cartItems[i].parentElement);
    } else {
    }
  });
}

carts.addEventListener("click", function () {
  window.location.href = "cartItemPage.html";
});
function showNotificationBar() {
  // clearTimeout(timer);
  clearTimeout(timer);

  cartAdded.classList.add("active");
  hr.classList.add("active");

  timer = setTimeout(hideNotificationBar, 2500);
}

function hideNotificationBar() {
  cartAdded.classList.remove("active");
  hr.classList.remove("active");
}

window.addEventListener("scroll", function () {
  wholeNavbar.classList.toggle("sticky", this.window.scrollY > 0);

  wholeNavbar.style.zIndex = "1000";
});

bars.addEventListener("click", function () {
  navbar.classList.add("toggle");
  bars.style.display = "none";
  times.classList.add("active");

  if (a === false) {
    carts.style.marginRight = "15px";
  }

  cartAmount.style.right = "60px";
});

times.addEventListener("click", function () {
  toggleTimes();
});

function toggleTimes() {
  navbar.classList.remove("toggle");
  times.classList.remove("active");
  bars.style.display = "block";
  bars.style.position = "relative";
  bars.style.right = "-45px";
  bars.style.left = "45px";
  navbar.style.paddingBottom = "-100px";

  if (x.matches) {
    bars.style.right = "-33px";
    bars.style.top = "-10px";
    // bars.style.paddingBottom = "10px";
  } else {
    // bars.style.display = "none";
  }
}

var addBtn = document.querySelectorAll("button");
var cart = document.getElementById("myModal");
var cartBody = document.getElementById("modal-body");
var cartTotal = document.getElementById("modal-footer");
var newPrice = document.getElementsByClassName("new-price");
var mainPrice = document.getElementsByClassName("main-price");
var items = document.getElementsByClassName("item-container");
var close = document.getElementsByClassName("close")[0]
addBtn.forEach(function(button, index) {

    button.addEventListener("click", function() {
        var ind = parseInt(index);

        localStorage.setItem(("product#" + index), newPrice[ind - 1].textContent);
        cart.style.display = "block"
        cartBody.innerHTML = ""
        cartTotal.innerHTML = ""
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var val = localStorage.getItem(key);
            cartBody.innerHTML += "<div class='cart-info'><span class='item-name'>" + key + "</span><span><input type='number' min='1' class='quantity'><span class='product-price'>" + val + "</span></div>"
            cartTotal.innerHTML += localStorage.getItem(key);

        }

    })
})
close.onclick = function() {
    cart.style.display = "none"
}
var addToCart = document.querySelectorAll(".add-to-cart")
var priceDiv = document.querySelector("#price")
var priceBtn = document.querySelector("#show-price")
var price = document.querySelectorAll(".money")
var totalPrice = 0

addToCart.forEach(function (product) {
    product.onclick = function () {
        totalPrice += +(product.getAttribute("price"))
        priceDiv.innerHTML += product.getAttribute("title") + " "
            if (priceDiv.innerHTML != "") {
                priceBtn.style.display = "block"
            }
    }
   

})


priceBtn.onclick = function () {
    priceDiv.innerHTML = totalPrice + " "
}

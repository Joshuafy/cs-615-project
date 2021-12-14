let carts = document.querySelectorAll('.add-cart')

let products = [
    {
        name: 'Pepperoni Pizza',
        tag: 'peperoni',
        price: 10,
        inCart: 0
    },
    {
        name: 'Cheese Pizza',
        tag: 'cheese',
        price: 10,
        inCart: 0
    },
    {
        name: 'Meat Lover Pizza',
        tag: 'meat',
        price: 11,
        inCart: 0
    },
    {
        name: 'Special Pizza',
        tag: 'special',
        price: 12,
        inCart: 0
    },

]


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumber(products[i]);
        totalCost(products[i]);
    })
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumber(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    //set the number of products in the cart
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    console.log("My cart items are", cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;

    } else {
        //make sure the product flag is 1 that means this product contains in the cart
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

//calculate the total cost
function totalCost(product) {
    //remember the value of cartCost is a string. Please be advised the conversion
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    console.log("The total price is", cartCost);
    console.log(typeof cartCost);
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';

        /*
            <ion-icon name="close-circle"></ion-icon>
            <ion-icon name="caret-back-circle"></ion-icon>
            <ion-icon name="caret-forward-circle"></ion-icon>
         
         */
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product"> 
               
                <img src="./images/${item.tag}1.png">
                <span>${item.name}</span>
            </div>
            <div class="price">
                $${item.price},00
            </div>
            <div class="quantity">
               
                <span>${item.inCart}</span>
               
            </div>
            <div class="total">
                $${item.inCart * item.price},00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class = "basketTotal">
                    $${cartCost},00 
                </h4>
            </div>
        `
    }
}
onLoadCartNumbers();
displayCart()
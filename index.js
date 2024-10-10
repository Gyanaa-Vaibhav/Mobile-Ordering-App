import menuItems from "./data.js"

const menu = document.getElementById("main")
const checkoutItems = document.getElementById("checkoutItems");
const checkoutSection = document.querySelector(".checkoutSection");
const totalPrice = document.getElementById("totalPrice");
const form = document.getElementById("form")
const payonFrom = document.getElementById("formPay");
const orderComplete = document.getElementById("orderComplete");
const cancelbtn = document.getElementById("cancel");
const userName = document.getElementById("name");
const afterPayment = document.getElementById("afterPayment");
const formPay = document.getElementById("formPay");
let name = ''
let itemsBought = []


menuItems.forEach(function (x) {
    
        menu.innerHTML += `
            <div class="items">
                <img src="${x.image}" alt="">
                <div class="info">
                    <h2>${x.name}</h2>
                    <p>${x.description}</p>
                    <p>$${x.price}</p>
                </div>
                <button id="${x.name}">+</button>
            </div>
            <hr>
    `
    }
);

menu.addEventListener("click", function (e) {
    const a = e.target.id
    menuItems.forEach(x => {
        if (x.name == a) {
            console.log(x.name)
            itemsBought.push(x)
            console.log(itemsBought);
        }
    })

    if (itemsBought.length > 0) {
        checkoutSection.style.display = "flex";
        render()
    }
})


function render() {
    checkoutItems.innerHTML = ''
    itemsBought.forEach((x) => {
        checkoutItems.innerHTML += `
        <div class="itemName">
            <p>${x.name}</p>
            <p id="remove">Remove</p>
            <p id="price">$${x.price}</p>
        </div>    
    `;
        
    })
    console.log(itemsBought)
    const a = itemsBought.reduce((total, current) => total + current.price, 0,)
    console.log(a);

    totalPrice.innerHTML = `Total Price :<span>$${a}</span>`;  
    payonFrom.innerHTML = `Pay $${a}`
}

form.addEventListener("click", (x) => x.preventDefault())

orderComplete.addEventListener("click", () => form.style.display = 'flex')
cancelbtn.addEventListener("click", () => form.style.display = 'none')

formPay.addEventListener("click", () => {
    afterPayment.style.display = "flex"
    afterPayment.innerHTML = `<p>Thanks, ${userName.value}! Your order is on its way!</p>`;
    checkoutSection.style.display = "none"
    form.style.display = "none"
    itemsBought = []
})
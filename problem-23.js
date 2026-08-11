const shoppingCart = (cart)=>{

const subTotal = cart.map(product => product.price * product.quantity * 0.90)

const finalTotalPrice = subTotal.map(item => item * 1.05).reduce((total,price)=>{
    return total + price;
},0)
    

return finalTotalPrice;
}

const cart = [
  {
    name: "Laptop",
    price: 50000,
    quantity: 1,
    category: "electronics"
  },
  {
    name: "Mouse",
    price: 1000,
    quantity: 2,
    category: "electronics"
  },
  {
    name: "Notebook",
    price: 200,
    quantity: 5,
    category: "stationery"
  }
];

console.log(shoppingCart(cart))
const getTotalAfterTaxAdd = (orders, category)=>{

    const finalResult = orders.filter(order => order.category === category && order.status === "completed")
    .map(order => order.price * order.quantity * 1.05)
    .reduce((sum,price)=>{
        return sum + price;
    })

    // const filterArray = orders.filter(order => order.category === category && order.status === "completed")
    // const subTotal = filterArray.map(order => order.price * order.quantity);

    // const addTax = subTotal.map(price => price * 1.05)
    // const total = addTax.reduce((sum,price)=>{
    //     return sum + price;
    // })

    return finalResult;
}
const orders = [
  {
    customer: "Asif",
    category: "electronics",
    price: 1000,
    quantity: 2,
    status: "completed"
  },
  {
    customer: "Rafi",
    category: "stationery",
    price: 200,
    quantity: 5,
    status: "completed"
  },
  {
    customer: "Nadia",
    category: "electronics",
    price: 1500,
    quantity: 1,
    status: "cancelled"
  },
  {
    customer: "Mitu",
    category: "electronics",
    price: 500,
    quantity: 3,
    status: "completed"
  }
];

const category = "electronics";
console.log(getTotalAfterTaxAdd(orders, category))
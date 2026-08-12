const orderManagement = (orders)=>{

    const finalResult = orders.filter(order => order.status === "completed").map(order =>{
      const total = order.items.reduce((sum, item)=>{
        return sum + item.price * item.quantity
      },0)
      return{
        id: order.id,
        customer: order.customer,
        total
      };
    });
 
    return finalResult
}
const orders = [
  {
    id: 1,
    customer: "Asif",
    items: [
      { name: "Pen", price: 10, quantity: 5 },
      { name: "Book", price: 100, quantity: 2 }
    ],
    status: "completed"
  },
  {
    id: 2,
    customer: "Rafi",
    items: [
      { name: "Mouse", price: 500, quantity: 2 }
    ],
    status: "pending"
  },
  {
    id: 3,
    customer: "Nadia",
    items: [
      { name: "Bag", price: 1000, quantity: 1 },
      { name: "Book", price: 100, quantity: 3 }
    ],
    status: "completed"
  }
];
console.log(orderManagement(orders))

const getDiscountedTotalForCategory = (products, category) =>{
    const totalPrice = products.filter(product => product.category === category).map(product  => product.price - (product.price * 0.10)).reduce((total, price)=>{
        return total + price
    },0)
    

    return totalPrice
}
const products = [{ name: "Pen", category: "stationery", price: 100 }, 
    { name: "Bag", category: "accessory", price: 500 }, 
    { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 

console.log(getDiscountedTotalForCategory(products, category))

const sortByPriceAscending = (products)=>{
    const sortedObject = products.sort((a, b)=> a.price - b.price);

    return sortedObject;
}
const products = [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 

console.log(sortByPriceAscending(products))
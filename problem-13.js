const findProductByName = (products, name)=>{
    const result = products.find(product => product.name === name)

    return result
}

const products = [{ name: "Pen", price: 10 }, 
     { name: "Bag", price: 500 }],name = "Bag" 

console.log(findProductByName(products, name))
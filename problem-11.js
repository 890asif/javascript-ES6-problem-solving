const getFormattedPrices = (prices)=>{
return prices.map(price =>{
    return`$${price}`
})
}
const prices = [100, 250, 75] 
console.log(getFormattedPrices(prices))
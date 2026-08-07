const sumAllPrices = (prices)=>{
    if(!Array.isArray(prices)){
        return "Invalid"
    }
    let sum = 0;
    for(let price of prices){
        sum += price;
    }
    return sum;
}
console.log(sumAllPrices([100, 250, 75]))
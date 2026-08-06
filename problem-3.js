const getLowestPrice = (prices)=>{
   const price = Math.min(...prices)

    return price;
}
console.log(getLowestPrice([340, 120, 560, 90]))
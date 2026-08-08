const getTopSellingProduct = (orders)=>{

    const result = orders.reduce((acc, order)=>{

        if(acc[order.product]){
            acc[order.product] += order.unitsSold
        }
        else{
            acc[order.product] = order.unitsSold
        }
        return acc;
    },{});

    const addUnitsold = Object.entries(result);
    
    const topProduct = addUnitsold.reduce((best, current)=>{

        if(current[1] > best[1]){
            return current
        }
        return best
    })
    return topProduct[0]
        
    }

const orders =  [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 },] 

console.log(getTopSellingProduct(orders))


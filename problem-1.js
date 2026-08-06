const calculateBill  = (amount, taxRate = 0.05 ) =>{
    const taxCalculate = (amount * taxRate);
    const totalBills = taxCalculate + amount;

    return totalBills;
}
console.log(calculateBill(1000))
console.log(calculateBill(1000, 0.10))
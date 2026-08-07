const cloneAndUpdate = (arr, index, newValue)=>{
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    const newArray = [...arr]
    newArray[index] = newValue;

return newArray;
}
console.log(cloneAndUpdate([5, 10, 15], 1, 99))
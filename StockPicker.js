function StockPicker(arr) { 
    let lissf = arr[0]
    let profit = -1
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > lissf) {
            profit = Math.max(profit, arr[i] - lissf)
        } else {
            lissf = arr[i]
        }
    }
    return profit
}
console.log(StockPicker([12,45,67,89]));



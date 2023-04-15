//https://leetcode.com/problems/maximum-swap/ 

var maximumSwap = function(num) {   //2736
    // Convert the number into a string
    const digits = num.toString().split("");   //['2', '7', '3', '4']
    // Track the current max, it's location, and the best swap as left and right
    let max = -1, maxIdx = -1, leftIdx = -1, rightIdx = -1;
    // iterate through the digits from right to left
    for(let i = digits.length - 1; i >= 0; i--) {
        const digit = parseInt(digits[i]);      //4   // 3   //7
        // if the digit is greater than the max, set it and its location to the new max
        if(digit > max) max = digit, maxIdx = i;   //4>-1 max= 4 maxidx = 3   //no   //max=7 maxId=1
        // if the digit is less than the current max
        // set this index to the left and the max to the right because it's the best swap
        else if(digit < max) leftIdx = i, rightIdx = maxIdx;   //  left=2  right =3  //left=0 rightid=1
    } 
    // If the left is -1 it's already the best
    if(leftIdx === -1) return num;
    // swap the left and right index numbers
    [digits[leftIdx],digits[rightIdx]] = [digits[rightIdx],digits[leftIdx]]; //[0,1]=[1,0]
    // rejoin and parse the number
    return parseInt(digits.join(""));
};


var maximumSwap = function(num) {
    const numArr = num.toString().split(""); 
    const maxIdx = [];
    let maxSofar = numArr.length-1;
    
    for(let i = numArr.length-1; i >= 0; i--) {
        if(numArr[i] > numArr[maxSofar]) maxSofar = i;
        maxIdx[i] = maxSofar;
    }
    
    for(let i = 0; i < numArr.length; i++) {
        const swapIdx = maxIdx[i];
        if(i != swapIdx && numArr[i] != numArr[swapIdx]) {
            [numArr[i], numArr[swapIdx]] = [numArr[swapIdx], numArr[i]]; // swap 
            break;
        }
    }
    return +numArr.join('');
};


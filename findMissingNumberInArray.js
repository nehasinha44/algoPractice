function missingNumber(arr){// Array of numbers
   let fullArray =Array.from(Array(Math.max.apply(Math, arr)).keys());
  console.log(fullArray.filter((fullArray) => {
    return arr.indexOf(fullArray)<0
}))

  
}

missingNumber([4,1,5,2,9]);
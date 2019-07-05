function uniqueNumberInArrayWhile(arr){
  let left=0;
  let right=1;
  while(right<arr.length){  //[1,2-left,1,2-right,3] 
    if(arr[left]===arr[right]){
      right++;
    }
    else if(right+1===arr.length){
      if(arr[left]!==arr[right])
      return left+2;
      else
      return left+1;
    }
    else {
      left++;
      let tem=arr[left];
      arr[left]=arr[right];
      arr[right]=tem;
      ++right;
     
    }
   
  }
}


console.log(uniqueNumberInArrayWhile([1,1,2,2,3,5]));


// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }
// countUniqueValues([1,2,2,5,7,7,99])

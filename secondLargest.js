function secondLargest(arr) {
  var secondMax  = Number.MIN_VALUE
  var max = Number.MIN_VALUE
  
  for(var i=0;i<arr.length;i++){
    if(max<arr[i]){
      secondMax = max
      max = arr[i]
    }
    if(arr[i]> secondMax && arr[i]!=max){
      secondMax=arr[i]
    }
  }
  console.log(max + '......'  +secondMax)
  return (max,secondMax)

}
secondLargest([2,3,4,6,7,9,-1,14])
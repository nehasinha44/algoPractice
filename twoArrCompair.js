function twoArrCompair(arr1,arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
 
  
  for(let i=0;i<arr1.length;i++){
    let correctIndex=arr2.indexOf(arr1[i] * arr1[i]);
    if(correctIndex === -1){
      return false;
    }
  arr2.splice(correctIndex,1);
  }
  return true;
  
}

console.log(twoArrCompair([1,2,3],[9,1,4]));
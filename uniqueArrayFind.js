function uniqueArrayFind(arr) {
  let val=[];
  for(let i=0; i<arr.length; i++){
   if(val.indexOf(arr[i])===-1){
     val.push(arr[i]);
   }
  }
  return val;
}

console.log(uniqueArray([1,2,3,2]));
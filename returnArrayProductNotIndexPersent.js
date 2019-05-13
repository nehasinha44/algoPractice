function returnArrayProductNotIndexPersent(arr){
  let product=1;
  let newarr=[];
  for(let i =0;i<arr.length;i++){
    product=arr[i]*product;
  }
  for(let i=0;i<arr.length;i++){
     newarr[i] = product/arr[i];
  }
  return newarr;
}

console.log(returnArrayProductNotIndexPersent([1,2,3,5,4]))
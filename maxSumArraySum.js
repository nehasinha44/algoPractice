function maxSumArraySum(arr,num){
  if(arr.length<num)return null;
  let maxSumm=0;
  let temSum=0;
  for(let i=0;i<num;i++){
    maxSumm += arr[i];
  }
  for(let i=num;i<arr.length;i++){
    temSum=maxSumm-arr[i-num]+arr[i];
    maxSumm=Math.max(temSum,maxSumm);
  }
  return maxSumm;
}

console.log(maxSumArraySum([1,2,3,4],2));
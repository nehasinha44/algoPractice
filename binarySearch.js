function binarySearch(arr,elementToSearch)
{
 
   if(arr.length==0)return false;
   
   let left = 0;
   let right = arr.length-1;
   
   if(left>right){
     return -1;
   }
   
   while(left<=right){
     let middle = Math.floor((left + right)/2)
     if(arr[middle]==elementToSearch){
       return middle;
     }
     if (arr[middle]<elementToSearch){
       left=middle+1;
     }
     if(arr[middle]>elementToSearch){
       right = middle-1;
     }
   }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],4));
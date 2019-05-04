// Code to find min and max from an Array in o(N) time complexity
function small(arr){
  var min=arr[0];
  var max = arr[0];
  for(var i =0;i<arr.length;i++){
    if(min > arr[i]){
      min=arr[i];
    }
    if(max < arr[i]){
      max=arr[i];
    }
 
  }
     console.log(min,"===",max );
  
}
small([4,5,7,3,2]);
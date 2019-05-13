function repeated(arr) {
  
  for(let i=0; i<arr.length; i++){
    let ele=arr[Math.abs(arr[i])];
    if(ele<0){
      console.log(Math.abs(arr[i]));
      return;
    }
    arr[Math.abs(arr[i])]=-arr[Math.abs(arr[i])];
  }
  
}

repeated([1,2,3,2]);
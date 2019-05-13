function arraySortZeroAndOne(a){
  
  let j=-1;
  let temp;
  for(let i=0 ; i<a.length;i++){
    if(a[i]<1){
      j++;
      temp=a[i];
      a[i]=a[j];
      a[j]=temp;
    }
  }
  console.log(a);
}



arraySortZeroAndOne([1,0,0,1,0,1]);
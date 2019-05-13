function CheckPowerOfTwo(num){
  if(num%2==0){
    CheckPowerOfTwo(Math.floor(num/2));
  }
  else{
  return false;
  }
  return true
  
  //return (Math.log(num)/Math.log(2)) % 1 === 0;
}

console.log(CheckPowerOfTwo(8));


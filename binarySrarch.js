function binarySrarch(numArray,key){
var middleIndex =Math.floor(numArray.length/2);
var midindexelm=numArray[middleIndex];
if(midindexelm === key) return true;
else if(midindexelm < key && numArray.length>1){
  return binarySrarch(numArray.splice(middleIndex,numArray.length),key);
}
else if(midindexelm > key && numArray.length>1){
  return binarySrarch(numArray.splice(0,middleIndex),key);
}
else
  return false;

}
binarySrarch([1,2,3,4,5,6,7,8,9,10],8)
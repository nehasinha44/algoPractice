function reversWordOneLoop(str){
  let strConvertArr=str.split(' ');
  let strConvertArrnew=[];
  for(let i=0;i<strConvertArr.length;i++){
   strConvertArrnew[i]= strConvertArr[i].split("").reverse().join("");
  }
  return strConvertArrnew;
}
console.log(reversWord("this is string"));
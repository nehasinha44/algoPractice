function findMissingNumberCase(number){
    let converarray= number.toString(10).replace(/\D/g, '0').split('').map(Number);
    let stack=[];
     for(let i=converarray.length-1;i>=0;i--){
        if(i%2=== 0){
          let incNumber =converarray[i]*2;
          if(incNumber >= 10){
            let converandadd = parseInt(incNumber/10) + parseInt(incNumber%10)
           stack.push(converandadd);
          }
          else{
             stack.push(incNumber);
          }
        }
        else{
          
          stack.push(converarray[i]);
        }
     }
     
   return  addTotalNumber(stack.reverse());
 }
 
 function addTotalNumber(calcutatedArray){
      let addedNumber=0;
       for(let i=0;i<calcutatedArray.length;i++){
         addedNumber += calcutatedArray[i];
        } 
      return findNextnumber(addedNumber);
 }
 function findNextnumber(number){
   return (number%10===0?number:(10*(parseInt(number/10)+1) - number))
 }
 
 function findMissingNumber(number, arrayofNum) {
   let outPutArray=[]
       for(let i=0;i<number;i++){
           findMissingNumber= findMissingNumberCase(arrayofNum[i])
           outPutArray.push(findMissingNumber);
       }
       
       return outPutArray;
 }
 
 findMissingNumber(3,[46888358,999999, 101]);
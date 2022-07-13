/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let srting= (s.replace(/[^A-Za-z0-9]/g, '')).toLowerCase(); 
    srting= srting.replaceAll(" ","").split("");
     console.log(srting)
     for(let i=0;i<srting.length;i++){
         if(srting[i]!=srting[srting.length-i-1]){
             return false
         }
     }
  return true    
 };
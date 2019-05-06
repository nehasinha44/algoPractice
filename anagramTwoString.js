// palindrome with two string
function palindrome(strFirst,strSec){
    let str1ConvertLorwerCase=strFirst.toLowerCase();
    let str2ConvertLorwerCase=strSec.toLowerCase();
   if(str1ConvertLorwerCase.length ===str2ConvertLorwerCase.length ){
      for(var i=0;i<str1ConvertLorwerCase.length/2;i++){
        if(str1ConvertLorwerCase[i]===str2ConvertLorwerCase[str2ConvertLorwerCase.length-1-i]){
          return true;
        }
        else
        return false;
      }
   }
   else
   return false;
  
  }
  console.log(palindrome('hello','Olleh'));
  
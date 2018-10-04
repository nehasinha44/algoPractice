function caesarCipher(string , num){
  num =num%26;
  var lowerCaseString = string.toLowerCase();
  var allAlphabet ='abcdefghijklmnopqrstuvwxyz'.split('');
  var newString='';
  for(var i=0;i<lowerCaseString.length;i++){
    var currentString=lowerCaseString[i];
    if(currentString === ' '){
      newString+=lowerCaseString[i];
      continue;
    }
    else{
      var currentindex =allAlphabet.indexOf(currentString);
      var newIndex = currentindex+num;
      if(newIndex>26) newIndex=newIndex-26;
      if(newIndex<0) newIndex=newIndex+26;
      
      if(string[i]===string[i].toUpperCase()){
        newString+=allAlphabet[newIndex].toUpperCase();
      }
      else{
        newString += allAlphabet[newIndex];
      }
    }
   
  }
   return newString;
}
caesarCipher("javascripe",-900);
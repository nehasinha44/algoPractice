function reversWord(string){
  var newString = string.split(' ');
  var newstring1='';
  for(var i = 0; i<newString.length; i++){
     for(var j = newString[i].length-1; j>=0; j--){
        newstring1+=newString[i][j];
     }
      newstring1+= ' ';

  }
 return newstring1;
}
reversWord("this is a string of words");
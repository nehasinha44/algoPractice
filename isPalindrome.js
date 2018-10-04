function isPalindrome(string){
  string = string.toLowerCase();
  var charArr= string.split("");
  var validChar = 'adcdefghijklmnopqrstuvwxyz'.split("");

  var letterArr=[]; 
  charArr.forEach(char => {
    if(validChar.indexOf(char)> -1) letterArr.push(char);
  });
  if(letterArr.join('') === letterArr.reverse().join('')) return true;
  else return false;
}
isPalindrome("mamdam,m a dmam");
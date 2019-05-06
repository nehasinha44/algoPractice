// anagram with two string
function anagram(strFirst, strSec) {
  let str1ConvertLorwerCase = strFirst.toLowerCase().split('').sort().join('');
  let str2ConvertLorwerCase = strSec.toLowerCase().split('').sort().join('');
   return (str1ConvertLorwerCase === str2ConvertLorwerCase ? true : false) ;
    
}
console.log(anagram('pellhy', 'hellpy'));
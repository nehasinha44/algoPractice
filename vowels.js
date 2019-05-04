function vowels(str){
let count=0;
const vol=['a','e','i','o','u'];
for(let char of str.toLowerCase()){
  if(vol.includes(char)){count++}
}
return count;
}
vowels("gik . hi ")
function capitalization(str){
const chars=[];
for(let char of str.split(' ')){

chars.push(char[0].toUpperCase()+char[1]);
}
return chars.join(' ');
}
capitalization("hello i am neha")
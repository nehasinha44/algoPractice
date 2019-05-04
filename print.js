function print(num){
let value='';
for(let i=0;i<num;i++){
 for(let j=0;j<i+1;j++){
    value += '#';
    }
value+='\n';
}
return value;
}
print(3)
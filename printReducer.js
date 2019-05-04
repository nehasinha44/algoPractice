function print(num,row=0,stair=''){
let value='';

if(num === row){
return;
}
if(num === stair.length){
console.log(stair);
return print(num,row+1);
}
if(stair.length <= row){
stair += '#';
}else{
stair += ' ';
}
print(num,row,stair);
}
print(3)
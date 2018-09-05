function balancedParentheses(value){
var count=0;
for(let i=0;i<= value.length-1; i++ ){
if(value[i]==='('){
count++;
}
else if(value[i]===')'){
count--;
if(count===-1){return false;}
}

}
if( count===0)
return true;
else return false;
}
console.log(check('()'));

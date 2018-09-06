function convert(value){
var newarr=[];
while(value >0){
var rem= value%2;
newarr.push(rem);
value = Math.floor(value/2);
}
// return newarr;
var binString = '';
    while (newarr.length>0) { 
        binString = binString + newarr.pop().toString();
    }

    return binString;
}
console.log(convert(21));
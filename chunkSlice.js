function chunk(array,size){
const chunked = [];
let index=0;
while(index<array.length){
chunked.push(array.slice(index,index+2));
index+=size;
}
return chunked;
}
chunk([1,2,3,4,5,6],2)
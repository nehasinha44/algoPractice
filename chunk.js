function chunk(array,size){
const chunked = [];
for(let elememt of array){
 const last = chunked[chunked.length-1];
if(!last || last.length===size){
chunked.push([elememt]);
}
else{
last.push([elememt])
}
}
return chunked
}
chunk([1,2,3,4,5,6],2)
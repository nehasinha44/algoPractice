function reverse(srt){
     
let revarr='';
for(let char of srt){
 revarr =char+revarr
}
return srt===revarr;
}
reverse('dsd');
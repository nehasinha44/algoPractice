function revint(srt){
const num=srt.toString().split('');

return parseInt(num.reduce((rev ,char)=> char+rev,''))* Math.sign(srt)
};

revint(-15);
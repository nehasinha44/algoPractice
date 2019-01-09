function revint(srt){
const num=srt.toString().split('').reverse().join('');

return parseInt(num)* Math.sign(srt)
};

revint(-15);
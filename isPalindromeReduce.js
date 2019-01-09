function palindron(srt){
return srt === srt.split('').reduce((rev ,char)=> char+rev,'');
};

palindron('gvh');
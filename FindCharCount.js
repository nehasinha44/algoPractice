function FindCharCount(srt){
  var mapObj={};
  let srtArr=srt.split('');
  for(let i=0;i<srtArr.length;i++){
    if(mapObj[srtArr[i]]){
      mapObj[srtArr[i]]++;
    }
    else{
      mapObj[srtArr[i]]=1;
    }
    
  }
  return mapObj;
}

console.log(FindCharCount('thisis'));
function checkReversString (s1, s2) {
let s2Count = s1.length-1;
  for (let i = 0; i < s1.length+1; i++) {
    if(s1[i] === s2[s2Count]){
	if(s2Count===0)
		return true;
		s2Count--;
}
else{return false}
  }

}

anagramCheckingOff('sbcf', 'fcba') ;
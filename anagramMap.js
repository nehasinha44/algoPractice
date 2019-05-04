function anagram(stringA,stringB){
	const CharMapA=buildCharMap(stringA);
	const CharMapB=buildCharMap(stringB);
if(Object.keys(CharMapA).length !== Object.keys(CharMapB).length) 
return false;
for(let char in CharMapA){
	if(CharMapA[char] !== CharMapB[char]){
return false;
}
return true;
}
}
function buildCharMap(str){
const charMap={};
for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
		charMap[char]=charMap[char]+1 || 1;
}
return charMap;
}
anagram('asd','ssa')
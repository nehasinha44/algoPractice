function harmlessRandsomeNote(nodeText , maganineText){
  var nodeArr= nodeText.split(" ");
  var maganineArr= maganineText.split(" ");
var maganineObject={};

maganineArr.forEach(word =>{
if(!maganineObject[word])maganineObject[word]=0;
maganineObject[word]++;
});
var nodeIsPossible=true;
nodeArr.forEach(word =>{
  if(maganineObject[word]){
    maganineObject[word]--;
    if(maganineObject[word] <0 )nodeIsPossible = false;
  }
  else
  nodeIsPossible = false;

});
return nodeIsPossible;
console.log(maganineObject);
}
harmlessRandsomeNote("nodeText.split is not is a function","nodeTextsplit is is not a function");
function reverse(strings){
var revString="";
string=strings.split("");
console.log(string)
console.log(strings.length);
for(let e = strings.length-1; e>=0; e--){
      console.log(string[e],"0",e);
	revString+=string[e];
}
return  revString;
}
console.log(reverse("hello"));
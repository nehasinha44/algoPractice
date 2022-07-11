/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map();
    const result =[];
for(let i=0;i<strs.length;i++){
   let sortedString= strs[i].split("").sort().join("");
    if(map.has(sortedString)){
         map.get(sortedString).push(strs[i]); 
    }
    else{
        map.set(sortedString, [strs[i]]);
    }
}
    for (let [key, value] of map) {
    result.push(value);
  }
  return result;
   
   
};
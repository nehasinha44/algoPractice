var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
        console.log(s.indexOf(s.charAt(i)),"===",s.lastIndexOf(s.charAt(i)))
        if(s.indexOf(s.charAt(i))==s.lastIndexOf(s.charAt(i))){
            return i;
            break; 
        }
    }
    return -1

};
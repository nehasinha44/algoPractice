function longestUniqueSubsttr(str){
    let length=0
    let newMap=new Map();
    debugger;
    for(let i=0;i<str.length;i++){
        if(newMap.has(str[i])){
            length=length <newMap.size?newMap.size:length;
        }
        else{
            newMap.set(str[i],str[i])
        }
    
    }
    return length;
    }
    
    console.log(longestUniqueSubsttr("sedfresdf"))
// n*(n+1)/2 

//  Longest Substring Without Repeating Characters

    function longestUniqueSubsttr(s) {
        if(s.length === 0)
        return 0;
    // Creating a set to store the last positions
    // of occurrence
    let seen = new Map();
    let maximum_length = 0;
 
    // Starting the initial point of window to index 0
    let start = 0;
 
    for(let end = 0; end < s.length; end++)
    {
         
        // Checking if we have already seen the element or
        // not
        if (seen.has(s[end]))
        {
             
            // If we have seen the number, move the start
            // pointer to position after the last occurrence
            start = Math.max(start, seen.get(s[end]) + 1);
        }
             
        // Updating the last seen value of the character
        seen.set(s[end],end)
        maximum_length = Math.max(maximum_length, end - start + 1);
    }
    return maximum_length;
}



// function longestUniqueSubsttr(str){
//     let length=0
//     let newMap=new Set();
//     debugger;
//     for(let i=0;i<str.length;i++){
//         if(newMap.has(str[i])){
//             length=length <newMap.size?newMap.size:length;
//             newMap.splice(str[i], 1);
//             debugger
//             newMap.set(s[i],s[i])
//         }
//         else{
//             newMap.set(str[i],str[i])
//         }
    
//     }
//     return length;
//     }
    
//     console.log(longestUniqueSubsttr("sedfresdf"))
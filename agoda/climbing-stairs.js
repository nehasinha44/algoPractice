 // https://leetcode.com/problems/climbing-stairs/ 


 var climbStairs = function(n) {
    let arr = [1,2];
    for(let i =2; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n-1]
};


var climbStairs = (n) => {
    if(n <= 1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2)
}


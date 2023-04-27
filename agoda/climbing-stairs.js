 // https://leetcode.com/problems/climbing-stairs/ 
//  Time complexity: O(n) for given n
//  Auxiliary space: O(n)

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

function fib(n)
{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}

//  Time complexity: O(n) for given n
//  Auxiliary space: O(1)

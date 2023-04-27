// https://www.youtube.com/watch?v=mSdNNaG5oPc

function coinChange(coins, amount)
{
	let dp= new Array(amount+1).fill(Infinity);
	dp[0]=0; // base case
	for(let currentamount=1;currentamount<=amount;currentamount++){
		for(let coin of coins){
				if(currentamount-coin >= 0){
					//if we ret to find for dp[10] and amount is 3 then = dp[3] + dp[10-3]+1
					dp[currentamount]=Math.min(dp[currentamount],dp[currentamount-coin]+1)
				}
		}
	}
	return  dp[amount]> amount?-1 : dp[amount];
}


// time com o(amount*coin) space o(n)



// Recursive javascript program for
// coin change problem.
    
// Returns the count of ways we can
// sum coins[0...n-1] coins to get sum "sum"
function count(coins , n , sum )
{
 
    // If sum is 0 then there is 1 solution
    // (do not include any coin)
    if (sum == 0)
        return 1;
     
    // If sum is less than 0 then no
    // solution exists
    if (sum < 0)
        return 0;
 
    // If there are no coins and sum
    // is greater than 0, then no
    // solution exist
    if (n <=0)
        return 0;
 
    // count is sum of solutions (i)
    // including coins[n-1] (ii) excluding coins[n-1]
    return count( coins, n - 1, sum ) +
           count( coins, n, sum - coins[n - 1] );
}
 



function countWays(S , m , n)
{
    // table[i] will be storing the number of solutions
    // for value i. We need sum+1 rows as the table is
    // constructed in bottom up manner using the base
    // case (sum = 0)
    // Initialize all table values as 0
    var table = Array(sum+1).fill(0);
     
 
    // Base case (If given value is 0)
    table[0] = 1;
 
    // Pick all coins one by one and update the table
    // values after the index greater than or equal to
    // the value of the picked coin
    for (i=0; i<n; i++)
        for (j=coins[i]; j<=sum; j++)
            table[j] += table[j-coins[i]];
 
    return table[sum];
}
 



{/* <script> */}

// A Naive recursive Javascript program to
// find minimum of coins to make a given
// change V
	
// m is size of coins array
// (number of different coins)
function minCoins(coins, m, V)
{
	
	// Base case
	if (V == 0)
		return 0;
	
	// Initialize result
	let res = Number.MAX_VALUE;
	
	// Try every coin that has smaller
	// value than V
	for(let i = 0; i < m; i++)
	{
		if (coins[i] <= V)
		{
			let sub_res = minCoins(coins, m,
							V - coins[i]);
			
			// Check for INT_MAX to avoid overflow and
			// see if result can minimized
			if (sub_res != Number.MAX_VALUE &&
				sub_res + 1 < res)
				res = sub_res + 1;
		}
	}
	return res;
}

// Driver code
let coins = [ 9, 6, 5, 1 ];
let m = coins.length;
let V = 11;

document.write("Minimum coins required is " +
			minCoins(coins, m, V) );

// This code is contributed by avanitrachhadiya2155

{/* </script> */}

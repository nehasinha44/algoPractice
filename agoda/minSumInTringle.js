var minimumTotal = function(A) {
  
	
	let memo = [];
	let n = A.length - 1;

	// For the bottom row
	for(let i = 0; i < A[n].length; i++)
		memo[i] = A[n][i]; // last row value push in memo array

	// Calculation of the
	// remaining rows, in
	// bottom up manner.
	for(let i = A.length - 2; i >= 0; i--)   // rows
		for(let j = 0; 	j < A[i].length; j++) //cols
			memo[j] = A[i][j] + 	Math.min(memo[j],	memo[j + 1]); //checking adcjecent element low and add and change in memo value

	return memo[0];
}


// time com o(n*m) n is number of rows m is number of coloum
// time o(n)


	function minSumPath(A)
	{
		let n = A.length;
		let ans = 0;
		for (let i = 0; i < n; i++) {
			let minimum = Number.MAX_SAFE_INTEGER;
			// the maximum element in each row is equal to row
			// number
			for (let j = 0; j <= i; j++) {
				if (i == 0 && j == 0) {
					// if both zero means first element
					minimum = Math.min(minimum, A[i][j]);
					continue;
				}
				// if j==i means the last element so we will not
				// calculate up of the last element
				if (j == i) {
					A[i][j] = A[i][j] + A[i - 1][j - 1];
					minimum = Math.min(minimum, A[i][j]);
					continue;
				}
				// The value at i,j will be calculated using
				// [i-1][j-1] or either [i-1][j] either the
				// element just above or the left of the upper
				// row
				let up = A[i][j], down = A[i][j];
				if (j > 0) {
					up += A[i - 1][j - 1];
				}
				else {
					up = Number.MAX_SAFE_INTEGER;
				}
				down += A[i - 1][j];
				A[i][j] = Math.min(up, down);
				// This minimum is to keep track of the minimum
				// from each row so that we don't have to
				// calculate it separately
				minimum = Math.min(minimum, A[i][j]);
			}
			ans = minimum;
		}
	
		return ans;
	}
	
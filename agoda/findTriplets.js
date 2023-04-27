
	function findTriplets(arr) {
		let found = false;
		for (let i = 0; i < arr.length - 2; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				if (arr[i] + arr[j] + arr[k] === 0)
				{
					found = true;
					
				}
			}
		}
	
	}
        return found
}
	findTriplets(arr);



threeSum([0, -1, 2, -3, 1])


// Javascript program to find triplets in a given
// array whose sum is zero

// function to print triplets with 0 sum

// if arr is sorted then if (i > 0 && arr[i] === arr[i - 1]) continue will help for delete repited char
function findTriplets(arr)
{
	let found = false;
    let n = arr.length;
    // obviously irrelevant if we don't have at least 3 numbers to play with!
	if (arr.length < 3) return 0;

	// sort array elements
	arr.sort((a, b) => a - b);

	for (let i=0; i<n-1; i++)
	{
		// initialize left and right
		let l = i + 1;
		let r = n - 1;
		let x = arr[i];
		while (l < r)
		{
			if (x + arr[l] + arr[r] == 0)
			{
				// print elements if it's sum is zero
				
				l++;
				r--;
				 return found = true;
			}

			// If sum of three elements is less
			// than zero then increment in left
			else if (x + arr[l] + arr[r] < 0)
				l++;

			// if sum is greater than zero then
			// decrement in right side
			else
				r--;
		}
	}

	return found
}

// Driven source

	let arr = [0, -1, 2, -3, 1];
	let n = arr.length;
	findTriplets(arr, n);


// This code is contributed by Mayank Tyagi



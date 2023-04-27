// Iterative Javascript program to reverse an array

/* Function to reverse arr[] from start to end*/
function rvereseArray(arr,start,end)
{
    let start = arr[i];
    let end = arr[arr.length-1]
	while (start < end)
	{
		var temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}


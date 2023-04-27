function findDiff(arr, n)
    {
           
        // sort the array
        arr.sort(function(a, b){return a - b});
   
        let count = 0, max_count = 0, min_count = n;
   
        for (let i = 0; i < (n - 1); i++) {
          
            // checking consecutive elements
            if (arr[i] == arr[i + 1]) {
                count += 1;
                continue;
            }
            else {
                max_count = Math.max(max_count, count);
   
                min_count = Math.min(min_count, count);
                count = 0;
            }
        }
   
        return (max_count - min_count);
    }

//     Time Complexity: O(nlogn) the inbuilt sort function takes N log N time to complete all operations, hence the overall time taken by the algorithm is N log N
// Space Complexity: O(1) since no extra array is used so the space taken by the algorithm is constant
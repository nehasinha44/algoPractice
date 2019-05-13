function rotatedBinarySearch(arr, k) {
    var left = 0,
        right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);

        if (arr[mid] == k) {
            return mid;
        }
        if (arr[left] < arr[mid]) {
            if (arr[left] <= k && k < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (arr[mid] <= k && k < arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

var arr = [4, 5, 6, 7, 0, 1, 2];
console.log(rotatedBinarySearch(arr, 0));
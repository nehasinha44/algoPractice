function missingNumber(arr) {
  var sortarr = arr.sort();
  let currentinc = arr[0]-0;
  for (var i = 0; i <= arr.length-1; i++) {
    if (arr[i] === i+currentinc) {
      continue;
    } else {
      console.log(i+1);
      break;
    }
  }
}
missingNumber([2,3,4,5]);
function twoSum(numArray, sum) {
    var pairs = [];
    var hashTable = [];
   
    for (var i = 0; i < numArray.length; i++) {
      var currNum = numArray[i];
      var counterpart = sum - currNum;
      if (hashTable.indexOf(counterpart) !== -1) {
        pairs.push([ currNum, counterpart ]);
      }
      hashTable.push(currNum);
    }
    
    return pairs;
  }

  twoSum([2,1,2,3,1],4);
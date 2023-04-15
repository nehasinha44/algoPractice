var findDuplicates = function(nums) {
    let obj = {};
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]] == undefined) {
        obj[nums[i]] = 0;
      } else if (obj[nums[i]] === 0) {
        ans.push(nums[i]);
      }
    }
    return ans;
};




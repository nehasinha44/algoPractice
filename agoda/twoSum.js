var twoSum = function(nums, target) {
    const n = nums.length;
  const a = [...nums];

  nums.sort((a, b) => a - b);

  let l = 0;
  let r = n - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];

    if (sum === target) {
      break;
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }

  const v = [];

  for (let i = 0; i < n; i++) {
    if (nums[l] === a[i]) {
      v.push(i);
    } else if (nums[r] === a[i]) {
      v.push(i);
    }
  }

  return v;

};

var twoSum = function(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};
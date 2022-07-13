var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            console.log(map,target-nums[i])
            return [map[target-nums[i]], i];
        } else {
            map[nums[i]] = i;
        }
    }
};
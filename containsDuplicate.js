/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(var i=0;i<nums.length-1;i++){
       for(var j=i+1;j<nums.length;j++){
           console.log(nums[i] , nums[j]);
           if(nums[i]===nums[j]){
               return true
           }
               
       }
    }
    return  false
};
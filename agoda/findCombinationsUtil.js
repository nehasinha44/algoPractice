var combinationSum = function(candidates, target) {
    debugger
    let res = []
    let temp = []
    let iterate = (index,sum)=>{
        if(sum>target) return;
        if(sum == target){
            res.push([...temp])
            return;
        }
        for(let i =index; i<candidates.length;i++){
            if(candidates[i]>target)continue
            temp.push(candidates[i])
            iterate(i, sum+candidates[i])
            temp.pop()
        }
    }
    iterate(0,0)
    return res;
};
console.log(combinationSum([2,1,3,5,2,4],4))
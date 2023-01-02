function findTriplets(arr){
    const ArrLength= arr.length;

    for(let i=0;i<ArrLength-1;i++){
        let NewSet = new Set();
        for(let j=i;j<ArrLength;j++){
            let k = -(arr[i]+arr[j]);
            if(NewSet.has(k)){
                console.log(k,arr[i],arr[j])
            }
            else{
                NewSet.add(arr[j]);
            }
        }
    }
}

findTriplets([0, -1, 2, -3, 1])
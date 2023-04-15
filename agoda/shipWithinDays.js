
const daysNeeded = (weights, capacity) => {
    let currentShipWeight = 0
    
    let numberOfDays = 1
    
    for (let weight of weights) {
        currentShipWeight += weight
        if (currentShipWeight > capacity) {
            currentShipWeight = weight
            numberOfDays += 1    
        }
        
    }
    
    return numberOfDays
}

function shipWithinDays(weights,days) {
    let maxValue = -Infinity
    let sumOfWeights = 0
    
    for (let weight of weights) {
        maxValue = Math.max(maxValue, weight)
        sumOfWeights += weight
    }
    
    let minAnswer = maxValue
    
    let maxAnswer = sumOfWeights
    while(minAnswer < maxAnswer) {
        const candidateCapacity = Math.floor((minAnswer + maxAnswer) / 2)
        if (daysNeeded(weights, candidateCapacity) <= days) {
            maxAnswer = candidateCapacity
        }
        
        if (daysNeeded(weights, candidateCapacity) > days) {
            minAnswer = candidateCapacity + 1
        }
    }
    return minAnswer
};

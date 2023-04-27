var leastBricks = function(wall) {
    const hash = {};
    let highestGap = 0;
    for (const layer of wall) { // row loop
        let brick = 0;
        for (let i = 0; i < layer.length - 1; i++) { // col loop
            brick += layer[i];  // finding the rows number 
            if (!hash[brick]) {   // first time occer 
                hash[brick] = 1;
            } else {
                hash[brick] += 1;
            }
            highestGap = Math.max(highestGap, hash[brick]) // maximum of gap increase of gap
        }
    };

    return wall.length - highestGap;
};
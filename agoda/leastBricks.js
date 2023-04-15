var leastBricks = function(wall) {
    const hash = {};
    let highestGap = 0;
    for (const layer of wall) {
        let brick = 0;
        for (let i = 0; i < layer.length - 1; i++) {
            brick += layer[i];
            if (!hash[brick]) {
                hash[brick] = 1;
            } else {
                hash[brick] += 1;
            }
            highestGap = Math.max(highestGap, hash[brick])
        }
    };

    return wall.length - highestGap;
};
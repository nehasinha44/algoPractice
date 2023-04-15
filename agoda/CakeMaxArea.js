var maxArea = function(h, w, hc, vc) {
    hc.sort((a,b) => a - b)
    vc.sort((a,b) => a - b)
    let maxh = Math.max(hc[0], h - hc[hc.length-1]),
        maxv = Math.max(vc[0], w - vc[vc.length-1])
    for (let i = 1; i < hc.length; i++)
        maxh = Math.max(maxh, hc[i] - hc[i-1])
    for (let i = 1; i < vc.length; i++)
        maxv = Math.max(maxv, vc[i] - vc[i-1])
    return BigInt(maxh) * BigInt(maxv) % 1000000007n
};



// A height of a cut is the distance between two horizontal cut. 0 and h is also consider as a cut
// A width of a cut is the distance between two vertical cut. 0 and w is also consider as a cut

// Note: horizontalCuts and verticalCuts need to be sorted as there is no guarantee that it is sorted.

// Once we found the max height and max width, max area is just max width * max height
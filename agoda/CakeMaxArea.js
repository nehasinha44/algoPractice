// https://www.geeksforgeeks.org/maximum-area-of-a-cake-after-horizontal-and-vertical-cuts/

// The horizontalCuts if perpendicular to any VerticalCut, then all the vertical slices cross all the horizontalCuts.
// Next, the maximum area of the rectangle must be enclosed by at least one vertical and one horizontal cut.

// Sort both horizontalCuts and verticalCuts lists.
// Initialize two variables, say MaxHorizontal and MaxVertical as horizontalCuts[0] and verticalCuts[0] respectively, as to consider the closest rectangles towards axis both horizontally and vertically which will store the maximum horizontal and vertical lengths of the rectangle respectively.
// Iterate in the range [1, horizontalCuts.size()-1] using the variable i and perform the following steps:
// Modify the value of MaxHorizontal as max(MaxHorizontal, horizontalCuts[i] – horizontalCuts[i-1]).
// Modify the value of MaxVertical as max(MaxVertical, verticalCuts[i] – verticalCuts[i-1]).
// Print MaxHorizontal*MaxVertical as the answer.


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
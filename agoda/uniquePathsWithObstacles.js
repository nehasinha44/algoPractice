

//dp

var uniquePathsWithObstacles = function (obstacleGrid) {
    if(obstacleGrid[0][0]===1 || obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1]===1)
    return 0;
   
    const table = Array.from({length:obstacleGrid.length},()=>new Array(obstacleGrid[0].length).fill(0));
    const M = obstacleGrid.length;
    const N = obstacleGrid[0].length;


    for(let i=0;i<table.length;i++){
        if(obstacleGrid[i][0]===1) break
        table[i][0] = 1;
    }

    for(let i=0;i<table.length;i++){
        if(obstacleGrid[0][i]===1) break
        table[0][i] = 1;
    }

    for(let i =1; i<table.length;i++){
        for(let j =1; j<table[i].length;j++)  {
            if(obstacleGrid[i][j]==1){
                table[i][j]=0;
            }
            else{
                table[i][j]=table[i-1][j]+table[i][j-1] 
            }
        }
    }
    return table[table.length-1][table[0].length-1]
  
  };



// Each cell in OG (OG[i][j]) can potentially reached by only two previously-visited cells (OG[i-1][j] & OG[i][j-1]), so the number of ways to reach the current cell (dp[i][j]) should be the sum of the ways to reach those other two cells (dp[i-1][j] + dp[i][j-1]), should they exist.

// Since any cell representing an obstacle cannot be a part of a path, its value in dp should be 0. We'll also need to seed the initial starting position with a value of 1 to represent the single initial path. Once we're done building dp, the value of the bottom-right cell should be our answer.

// Time Complexity: O(N * M) where N and M are the dimensions of the input matrix
// Space Complexity: O(N * M) for the DP matrix
// or O(1) if we use an in-place approach for the DP matrix
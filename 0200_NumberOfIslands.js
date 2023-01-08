// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // variable to track number of islands
    let islandCount = 0;

    // nested for loop will go through every coordinate on grid once
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {

            // if land is found (value == 1)
            if (grid[i][j] == 1) {
                // island counter goes up
                islandCount++;

                // island is flooded and all connected land coordinates are set to 0
                flood(grid, i, j, 0);
            }
        }
    }
    // when all coordinates checked, return islandCount;
    return islandCount;
};

var flood = function (grid, sr, sc, newValue, initialValue = grid[sr][sc]) {
    // coordinate at [sr][sc] is set to newValue
    grid[sr][sc] = newValue;

    // valid 4-way adjacent blocks that match initialValue are flooded recursively
    if (sr + 1 < grid.length && grid[sr + 1][sc] === initialValue) flood(grid, sr + 1, sc, newValue, initialValue)
    if (sr - 1 >= 0 && grid[sr - 1][sc] === initialValue) flood(grid, sr - 1, sc, newValue, initialValue)
    if (sc + 1 < grid[sr].length && grid[sr][sc + 1] === initialValue) flood(grid, sr, sc + 1, newValue, initialValue)
    if (sc - 1 >= 0 && grid[sr][sc - 1] === initialValue) flood(grid, sr, sc - 1, newValue, initialValue)

    return grid
};

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]]))
console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]]))
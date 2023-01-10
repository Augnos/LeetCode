// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, 
// plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. 
// Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color, startColor = image[sr][sc]) {
    // return initial image if starting pixel already matches color
    if (image[sr][sc] == color) return image;

    image[sr][sc] = color;

    if (sr + 1 < image.length && image[sr+1][sc] === startColor ) floodFill(image, sr + 1, sc, color, startColor)
    if (sr - 1 >= 0 && image[sr-1][sc] === startColor ) floodFill(image, sr - 1, sc, color, startColor)
    if (sc + 1 < image[sr].length && image[sr][sc+1] === startColor ) floodFill(image, sr, sc + 1, color, startColor)
    if (sc - 1 >= 0 && image[sr][sc-1] === startColor ) floodFill(image, sr, sc - 1, color, startColor)

    return image
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
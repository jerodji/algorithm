/*
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */


 /**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function findNumberIn2DArray(matrix, target) {
    if (matrix.length == 0) return false;

    let x = matrix.length - 1;
    let y = 0;
    while (y < matrix[0].length && x >= 0) {
        if (matrix[x][y] > target) {
            x--;
        } else if (matrix[x][y] < target) {
            y++;
        } else {
            return true;
        }
    }

    return false;
}


const matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const target = 7;

let out = findNumberIn2DArray(matrix, target);
console.log(out);

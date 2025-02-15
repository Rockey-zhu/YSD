/***
 * 
 * [
 *  [1,2,3],
 *  [4,5,6],
 *  [7,8,9]
 * ]
 * 
 * 输出 [1,2,3,6,9,8,7,4,5]
 */

function spiralOrder(matrix) {
    if (matrix.length === 0) {
        return []
    }

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    let direction = "right";
    let result = [];

    while (left <= right && top <= bottom) {
        if (direction === "right") {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++
            direction = "down"
        } else if (direction == "down") {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][bottom])
            }
            right--;
            direction = "left"
        } else if (direction == "left") {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--;
            direction = "top"
        } else if (direction === "top") {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++
            direction = "right"
        }
    }
    return result;
}

console.log(
    spiralOrder(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
    )
)
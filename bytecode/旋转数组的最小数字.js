// 剑指 Offer 11. 旋转数组的最小数字
/**
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，
输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：
输入：[3,4,5,1,2]
输出：1

示例 2：
输入：[2,2,2,0,1]
输出：0
注意：本题与主站 154 题相同：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/

 */

// 标签：二分查找

function minArray(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let mid = parseInt((left+right)/2)
        if (numbers[mid] < numbers[right]) {
            right = mid;
        } else if (numbers[mid] > numbers[right]) {
            left = mid+1;
        } else {
            right--;
        }
    }
    return numbers[left];
}


let a = minArray([3,4,5,1,2]);
console.log(a);

let b = minArray([2,2,2,0,1]);
console.log(b);

let c = minArray([1,3,5]);
console.log(c);

let d = minArray([3,3,1,3]);
console.log(d);


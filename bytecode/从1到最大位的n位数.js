/**
剑指 Offer 17. 打印从 1 到最大的 n 位数
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

示例1:
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
 
说明：
用返回一个整数列表来代替打印
n 为正整数

相关标签 数学
 */

/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    if (n < 1) return [];
    let largest = '';
    for (let i = 0; i < n; i++) {
        largest += '9';
    }
    // console.log('largest == ',largest);
    let arr = [];
    for (let i = 1; i <= largest*1; i++) {
        arr.push(i);
    }
    // console.log(arr);
    return arr;
};

printNumbers(2);

/*
给定一个只包括 (，)，{，}，[，] 的字符串，判断字符串是否有效。
有效字符串需满足：
1、左括号必须用相同类型的右括号闭合。
2、左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串
*/

function matching(str) {
    if (!str || str.length==0) return false;
    const yu = str.length % 2;
    if (yu != 0) return false; 
    const count = str.length/2;
    let result = 1;
    for (let i=0; i<count; i++) {
        let a = str[i];
        let b = str[str.length-1-i];
        console.log(a, b);
        let s = a + b;
        if (s == '()' || s == '[]' || s == '{}') {
            result *= 1;
        } else {
            result *= 0;
        }
    }
    if (result == 1)
        return true;
    else 
        return false;
}

let b = matching ('{[()]}');
console.log(b);



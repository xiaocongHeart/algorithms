/**
 * 斐波那契数列
 * 得到斐波那契数列
 * @param n  位数
 * @returns  array
 * 
 */
function fib(n) {
    var res = []
    res.length = n;
    if (n == 1 || n == 2) {
        return 1
    } else {
        res[1] = 1
        res[2] = 2
        for (var i = 3; i < n; i++) {
            res[i] = res[i - 1] + res[i - 2]
        }
    }

    return res

}
var a = fib(8);
console.log(a)


/**
 * 冒泡排序
 * 
 */

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}


var arr = [1, 5, 9, 22, 0, 5, 3, 8, 99, 4, 15];

console.log(bubbleSort(arr))
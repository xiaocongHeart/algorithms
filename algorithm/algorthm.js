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
console.log("斐波那契数列" + a)
var arr = [22, 7, 88, 5, 9, 22, 0, 5, 3, 8, 99, 4, 15];

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



// console.log("冒泡排序" + bubbleSort(arr));
/**
 * 选择排序
 */

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}

console.log("选择排序" + selectionSort([5, 3, 9]))


/**
 * 插入排序
 * 
 */

function insertSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr
}

console.log("插入排序", insertSort([5, 3, 9]))


/**
 * 数组去重
 */


function oSort(arr) {
    var len = arr.length;
    var res = []

    for (var i = 0; i < len; i++) {
        if (res.indexOf(arr[i]) < 0) {
            res.push(arr[i]);
        }
    }
    return res
}
console.log(oSort([1, 2, 3, 2, 3, 1, 4, 5, 6, 5, 6, 4]))
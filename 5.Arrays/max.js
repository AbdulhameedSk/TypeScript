"use strict";
function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log("The maximum value in the array is " + max([2, 45, 6, 78, 8650]));

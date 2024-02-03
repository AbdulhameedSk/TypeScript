"use strict";
function isl(a) {
    if (a.age > 18) {
        return true;
    }
    return false;
}
console.log(isl({
    name: "John",
    age: 25
}));

// type tog= number[] | string[];
// function first(f:tog){
//     return f[0];
// }
// console.log(first([1,2,3]));
// console.log(first(["a","b","c"]));

function identity<T>(arg: T[]): T {
  return arg[0];
}

let output1 = identity<string | number>(["myString",1]);
let output2 = identity<number>([100]);
console.log(output1);
console.log(output2);


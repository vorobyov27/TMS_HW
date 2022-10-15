// Advanced Exercise 1: change values.
let a = 4;
let b = 3;

b = a+""+b;
a = +(b.slice(-1));
b = +(b.slice(0, 1));
console.log("a = "+ a +": type of a = "+typeof a);
console.log("b = "+ b +": type of b = "+typeof b);
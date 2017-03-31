const {Sum, All, First} = require("./lib/semigroup.js");
const { Map } = require("immutable-ext");

const res = Sum.empty().concat(Sum(2)).concat(Sum(3));

console.log(res);

const sum = xs => xs.reduce((a,b)=>a+b,0);
const all = xs => xs.reduce((a,b)=>a&&b,true);
const first = xs => xs.reduce((a,b)=>a);

console.log(sum([1,2,3,4,5]));
console.log(all([true,true,true,false]));
console.log(first([1,2,3]));
// console.log(first([])); // Bad
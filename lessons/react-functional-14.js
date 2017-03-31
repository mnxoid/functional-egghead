const Box = require("./lib/box.js");
const Task = require("data.task");
const {Right, Left, fromNullable} = require("./lib/either.js");
const { List, Map } = require("immutable-ext");

// Laws of functors
// 1) fx.map(f).map(g) == fx.map(x => g(f(x)))
// 2) fx.map(id) == id(fx)

res1 = Box("squirrels")
       .map(s => s.substr(5))
       .map(s => s.toUpperCase());

res2 = Box("squirrels")
       .map(s => s.substr(5).toUpperCase());

console.log(res1, res2);

const id = x => x;

res1 = Box("crayons").map(id);
res2 = id(Box("crayons"));

console.log(res1, res2);
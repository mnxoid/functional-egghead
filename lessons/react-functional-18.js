const Box = require("./lib/box.js");

const add = x => y => x+y;

var res=Box(add).ap(Box(2)).ap(Box(3)); // Box(3)
console.log(res);

const liftA2 = (f, fx, fy) =>
  fx.map(f).ap(fy);
  // F(f).ap(fx).ap(fy)

res = liftA2(add,Box(2),Box(4));
console.log(res);

//F(x).map(f) == F(f).ap(F(x))
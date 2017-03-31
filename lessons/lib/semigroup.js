const Sum = x =>
({
	x,
	concat: ({x: y}) => Sum(x+y),
	inspect: () => `Sum(${x})`
});

Sum.empty = () => Sum(0); // Sum is a monoid

const Product = x =>
({
  x,
  concat: ({x: y}) => Product(x*y),
  inspect: () => `Product(${x})`
});

Product.empty = () => Product(1); // Product is a monoid

const Any = x =>
({
  x,
  concat: ({x: y}) => Any(x || y),
  inspect: () => `Any(${x})`
});

Any.empty = () => Any(false); // Any is a monoid

const All = x =>
({
	x,
	concat: ({x: y}) => All(x && y),
	inspect: () => `All(${x})`
});

All.empty = () => All(true); // All is a monoid

const Max = x =>
({
  x,
  concat: ({x: y}) => Max(x>y?x:y),
  inspect: () => `Max(${x})`
});

Max.empty = () => Max(-Infinity); // Max is a monoid

const Min = x =>
({
  x,
  concat: ({x: y}) => Min(x<y?x:y),
  inspect: () => `Min(${x})`
});

Min.empty = () => Min(+Infinity); // Min is a monoid

const First = x =>
({
	x,
	concat: _ => First(x),
	inspect: () => `First(${x})`
});

const Fn = f =>
({
  fold: f,
  concat: o => 
    Fn(x => f(x).concat(o.fold(x))),
  inspect: () => `Fn(${f})`
});

const Pair = (x, y) =>
({
  x,
  y,
  concat: ({x: x1, y: y1}) => 
    Pair(x.concat(x1), y.concat(y1)),
  inspect: () => `Pair(${x},${y})`,
  toList: () => [x, y],
  bimap: (f, g) => Pair(f(x), g(y))
});


module.exports = { Sum, Product, Any, All, Max, Min, First, Fn, Pair };
const {Right, Left, fromNullable, Either} = require("./lib/either.js");
const Box = require("./lib/box.js");
const Task = require("data.task");

// F(a) => G(a)

// Law of natural transformation:
// nt(x).map(f) == nt(x.map(f))

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of);

const boxToEither = b =>
  b.fold(Right);

eitherToTask(Right("nightingale"))
.fork(err => console.error("err", err), 
      val => console.log("val", val));

eitherToTask(Left("errrrrr"))
.fork(err => console.error("err", err), 
      val => console.log("val", val));

console.log(boxToEither(Box(100)));

const res1 = boxToEither(Box(100)).map(x=>x*2);
const res2 = boxToEither(Box(100).map(x=>x*2));
console.log(res1, "==", res2);

const first = xs =>
  fromNullable(xs[0]);

const res3 = first([1,2,3]).map(x => x*5);
const res4 = first([1,2,3].map(x => x*5));
console.log(res3, "==", res4);
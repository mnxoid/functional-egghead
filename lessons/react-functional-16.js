const Box = require("./lib/box.js");
const Task = require("data.task");
const {Right, Left, fromNullable, Either} = require("./lib/either.js");

//F.of, chain(flatMap, bind, >>=)   -  these two operations define a monad

// httpGet("/user")
//   .chain(user => 
//     httpGet(`/comments/${user.id}`)
//     .chain(comments =>
//       updateDOM(user, comments)));

const join = m => 
  m.chain(x => x);

var m = Box(Box(Box(3)))

var res1 = join(m.map(join));
var res2 = join(join(m));

console.log(res1, res2);

m = Box("wonder");

res1 = join(Box.of(m));
res2 = join(m.map(Box.of));

console.log(res1, res2);
const Box = require("./lib/box.js");
const Task = require("data.task");
const {Right, Left, fromNullable} = require("./lib/either.js");

const Either = {
  of: (x) => Right(x)
}

console.log(Either.of("hello"));
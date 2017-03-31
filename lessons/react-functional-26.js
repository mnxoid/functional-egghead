const { List, Map } = require('immutable-ext');
const {Right, Left, fromNullable, Either} = require("./lib/either.js");
const Box = require("./lib/box.js");
const Task = require('data.task');

// isomorphism:
// from(to(x)) == to(from(x)) == x

// String ~ [Char]

const Iso = (to, from) => ({
  to,
  from
});

const chars = Iso(s => s.split(""), c => c.join(""));

const res = chars.from(chars.to("Hello, world"));

console.log(res);

const truncate = str =>
  chars.from(chars.to(str).slice(0, 3).concat("..."));

console.log(truncate("Hello, world!"));

// [a] ~ Either null a

const singleton = Iso(e => e.fold(() => [], x => [x]),
                      ([a]) => fromNullable(a));

const filterEither = (e, pred) =>
  singleton.from(singleton.to(e).filter(pred));

const res1 = filterEither(Right("Hello"), x => x.match(/h/ig))
             .map(x => x.toUpperCase());

console.log(res1);
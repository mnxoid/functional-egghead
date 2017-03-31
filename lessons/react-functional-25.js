const { List } = require('immutable-ext');
const {Right, Left, fromNullable, Either} = require("./lib/either.js");
const Box = require("./lib/box.js");
const Task = require('data.task');


const res = List(["hello", "world"])// List constructor is a natural transformation
.chain(x => List(x.split(""))); //chain pops the items out of the Lists (unlike map)

console.log(res);

//-------------------------------------------------

const first = xs =>
  fromNullable(xs[0]);

const largeNumbers = xs =>
  xs.filter(x => x > 100);

const larger = x =>
  x*2;

const app1 = xs =>
  first(largeNumbers(xs).map(larger)); //inefficient, maps all numbers

const app2 = xs =>
  first(largeNumbers(xs)).map(larger); //more efficient (say thx to natural transform law)


console.log(app1([2, 400, 5, 1000]));
console.log(app2([2, 400, 5, 1000]));

//--------------------------------------------------

const fake = id =>
  ({id, name: "user1", best_friend_id: id+1});

const Db = ({
  find: id =>
    new Task((rej, res) => 
      res(id > 2 ? Right(fake(id)) : Left("not found")))
});

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of);

// Db.find(3) //Task(Either(user))
// .chain(either =>
//   either.map(user => Db.find(user.best_friend_id))); //Either(Task(Either(user)))

Db.find(3) //Task(Either(user))
.chain(eitherToTask) //Task(user)
.chain(user =>
  Db.find(user.best_friend_id)) //Task(Either(user))
.chain(eitherToTask) //Task(user)
.fork(err => console.error("err", err), 
      val => console.log("val", val));

Db.find(3) //Task(Either(user))
.chain(eitherToTask) //Task(user)
.map(user => user.best_friend_id)
.chain(Db.find) //Task(Either(user))
.chain(eitherToTask) //Task(user)
.fork(err => console.error("err", err), 
      val => console.log("val", val));


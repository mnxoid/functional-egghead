const Task = require("data.task");

const launchMissiles = () =>
	new Task((rej, res) => {
		console.log("launch missiles!");
		res("missile");
	});


Task.of(1) //.rejected
.map(x => x + 1)
.chain(x => Task.of(x + 1))
.fork(e => console.log("err", e),
	  x => console.log("success", x))

const app = launchMissiles().map(x => x + "!");

app
.map(x => x + "!")
.fork(e => console.log("err", e),
	  x => console.log("success", x))
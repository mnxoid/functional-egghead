const Box = require("./lib/box.js");


const LazyBox = g =>
({
	map: f => LazyBox(() => f(g())),
	fold: f => f(g()),
	inspect: () => "LazyBox([Function])"
});


const NextCharFromNumberString = str =>
	LazyBox(() => str)
	.map(s => s.trim())
	.map(parseInt)
	.map(n => n+1)
	.map(String.fromCharCode)
	//.fold(s => s.toLowerCase())

const result = NextCharFromNumberString(" 64  ");
console.log(result);
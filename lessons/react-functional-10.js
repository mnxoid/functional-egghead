const { Sum, All, First } = require("./lib/semigroup.js");
const { Map, List } = require("immutable-ext");

const res1 = List.of(Sum(1), Sum(2), Sum(3))
			.fold(Sum.empty());
			// .reduce((a,b)=>a.concat(b), Sum.empty());

console.log(res1);

const res2 = Map({brian: 3, sara: 5})
			.map(Sum)
			.fold(Sum.empty());

console.log(res2);

const res3 = Map({brian: 3, sara: 5})
			.foldMap(Sum);

console.log(res3);
const Right = x => ({
	chain: f => f(x),
	map: f => Right(f(x)),
	inspect: () => `Right(${x})`,
	fold: (f, g) => g(x),
	concat: o => o.fold(e => Left(e), r => Right(x.concat(r))),
	ap: b2 => b2.map(x)
});

const Left = x => ({
	chain: f => f(x),
	map: f => Left(x),
	inspect: () => `Left(${x})`,
	fold: (f, g) => f(x),
	concat: o => Left(x),
	ap: b2 => b2.map(x)
})

const fromNullable = x =>
	x != null ? Right(x) : Left(null);

const Either = {
	of: x => Right(x)
}
module.exports = {Right, Left, fromNullable, Either};
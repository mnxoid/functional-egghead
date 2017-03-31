const Box = x =>
({
  chain: f => f(x),
	map: f => Box(f(x)),
	fold: f => f(x),
	inspect: () => `Box(${x})`,
  ap: b2 => b2.map(x)
});

Box.of = x => Box(x);

module.exports = Box;
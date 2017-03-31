// const Either = Right || Left;

const Right = x => ({
	map: f => Right(f(x)),
	inspect: () => `Right(${x})`,
	fold: (f, g) => g(x)
});

const Left = x => ({
	map: f => Left(x),
	inspect: () => `Left(${x})`,
	fold: (f, g) => f(x)
})

const fromNullable = x =>
	x != null ? Right(x) : Left(null);

const findColor = name =>
	fromNullable(({
		red: '#ff4444',
		blue: '#3b5998',
		yellow: '#fff68f'
	})[name]);


//-----------------------------------------------------------------------------------------------------
const result = findColor('red')
				.map(s => s.slice(1))
				.fold(x => `error`, s => s.toUpperCase());
console.log(result);
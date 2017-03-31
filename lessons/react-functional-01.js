// First try
//-----------------------------------------------------------------------------------------------------
// const NextCharFromNumberString = str => {
// 	const trimmed = str.trim();
// 	const number = parseInt(trimmed);
// 	const nextNumber = number + 1;
// 	return String.fromCharCode(nextNumber);
// };
//-----------------------------------------------------------------------------------------------------


// One-liner
//-----------------------------------------------------------------------------------------------------
// const NextCharFromNumberString = str => String.fromCharCode(parseInt(str.trim())+1);
//-----------------------------------------------------------------------------------------------------


// Bunch of maps
//-----------------------------------------------------------------------------------------------------
// const NextCharFromNumberString = str =>
// 	[str]
// 	.map(s => s.trim())
// 	.map(s => parseInt(s))
// 	.map(n => n+1)
// 	.map(n => String.fromCharCode(n));
//-----------------------------------------------------------------------------------------------------


// Our own Box instead of Array
//-----------------------------------------------------------------------------------------------------
const Box = x =>
({
	map: f => Box(f(x)),
	fold: f => f(x),
	inspect: () => `Box(${x})`
});

const NextCharFromNumberString = str =>
	Box(str)
	.map(s => s.trim())
	.map(s => parseInt(s))
	.map(n => n+1)
	.fold(n => String.fromCharCode(n));
//-----------------------------------------------------------------------------------------------------

// Result:
const result = NextCharFromNumberString(" 64  ");
console.log(result);
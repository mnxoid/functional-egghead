const {Right, Left, fromNullable} = require("./lib/either.js");

const tryCatch = f => {
	try {
		return Right(f());
	} catch (e) {
		return Left(e);
	}
}

const fs = require("fs");
// Original code
//-----------------------------------------------------------------------------------------------------
// const getPort = () => {
// 	try {
// 		const str = fs.readFileSync("config.json");
// 		const config = JSON.parse(str);
// 		return config.port;
// 	} catch (e) {
// 		return 3000;
// 	}
// }
//-----------------------------------------------------------------------------------------------------

// Refactored
//-----------------------------------------------------------------------------------------------------
const getPort = () =>
	tryCatch(() => fs.readFileSync("config.json"))
	.chain(c => tryCatch(() => JSON.parse(c)))
	.fold(def => 3000, c => c.port);
	
//-----------------------------------------------------------------------------------------------------


const result = getPort();
console.log(result);
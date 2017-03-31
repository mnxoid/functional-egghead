const { List } = require("immutable-ext");

// for(x in ixs){
//   for(y in ys){
//     for(z in zs){
//       //do smth
//     }
//   }
// }


const merch = () => 
  List.of(x => y => z => `${x}-${y}-${z}`)
  .ap(List(["teeshirt", "sweater"]))
  .ap(List(["large", "medium", "small"]))
  .ap(List(["black","white"]))

var res = merch();

console.log(res);
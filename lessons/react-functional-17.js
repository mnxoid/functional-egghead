// const add = (x,y) => x+y;
const add = x => y => x+y;
// const inc = y => add(1,y);
const inc = add(1);

res = inc(2);
console.log(res);

const modulo = dvr => dvd => dvd%dvr;
const isOdd = modulo(2);

res = isOdd(2);
console.log(res);

const filter = pred => xs => xs.filter(pred);
const getAllOdds = filter(isOdd);

res = getAllOdds([1,2,3,4,5,6,7]);
console.log(res);

const replace = regex => repl => str =>
  str.replace(regex, repl);
const censor = replace(/[aeiou]/ig)("*");

res = censor("Onomatopoeiaus");
console.log(res);

const map = f => xs => xs.map(f);
const censorAll = map(censor);

res = censorAll(["hello","world","more","vowels"]);
console.log(res);
const { Either } = require("./lib/either.js");

const liftA2 = (f, fx, fy) =>
  fx.map(f).ap(fy);

const $ = selector =>
  Either.of({selector, height: 10});

const getScreenSize = screen => head => foot =>
  screen - (head.height + foot.height);

// Traditional way:
var res = $("header").chain(head => 
  $("footer").map(footer => 
    getScreenSize(800)(head)(footer)
  )
);
console.log(res);

// Applicative - a bit prettier
res = Either.of(getScreenSize(900))
      .ap($("header"))
      .ap($("footer"));
console.log(res);

// The lift way - more concise
res = liftA2(getScreenSize(1000), $("header"), $("footer"));
console.log(res);
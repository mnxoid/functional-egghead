const Task = require("data.task");
const Spotify = require("./spotify");
const { List } = require("immutable-ext");
const { Pair, Sum } = require("./lessons/lib/semigroup");

const argv = new Task((rej, res) => res(process.argv));
const names = argv.map(args => args.slice(2));
// const names = Task.of(["Rammstein", "Disturbed"]);

const debug = x => {
  console.log(x);
  return x;
};

const Intersection = xs => ({
  xs,
  concat: ({xs: ys}) =>
    Intersection(xs.filter(x => ys.some(y => x === y)))
});

Intersection.empty = () => ({
  xs: [],
  concat: ({xs: ys}) => Intersection(ys)
}); 

const related = name =>
  Spotify.findArtist(name)
  .map(artist => artist.id)
  .chain(Spotify.relatedArtists)
  .map(artists => artists.map(artist => artist.name));

const artistIntersection = rels => 
  rels
  .foldMap(x => Pair(Intersection(x), Sum(x.length)),
          Pair(Intersection.empty(), Sum.empty()))
  .bimap(x => x.xs, y => y.x)
  .toList();

const main = names =>
  List(names)
  .traverse(Task.of, related)
  .map(artistIntersection);

names.chain(main).fork(console.error, console.log);

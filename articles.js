const ARTICLES = [
  { title: "A message to our customers", upvotes: 12, date: "2020-01-24" },

  { title: "Alphabet earnings", upvotes: 22, date: "2019-11-23" },

  { title: "Artificial Mountains", upvotes: 2, date: "2019-11-22" },

  { title: "Scaling to 100k Users", upvotes: 72, date: "2019-01-21" },
  { title: "the Emu War", upvotes: 24, date: "2019-10-21" },
  { title: "What's SAP", upvotes: 1, date: "2019-11-21" },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];

// sort this data without mutating(without changing original array) based on

// a) upvotes (ascending order)

// b) date (desc/backwards-- latest date first)

const values = [1, 56, 34, 9, 10, 21, 2, 8];
console.log(
  values.sort(function (a, b) {
    return a - b;
  })
);

// hof --  higher order functions --

function sayHEllo(name, anotherFunc) {
  console.log("HEllo mr. " + name);
  anotherFunc(name); // a callback function
}

function singSong(somebody) {
  console.log("Mr " + somebody + " you are a special person. ");
}

// sayHEllo("kevin");
sayHEllo("albert", singSong);

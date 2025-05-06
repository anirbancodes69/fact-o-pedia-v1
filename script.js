// console.log("Hello World");

// VALUES, VARIABLES & OPERATORS ////////////////////////////////////////
// let votingInteresting = 21;
// let votingMindblowing = 22;
// const text = "Delhi is the capital of India";
// console.log(typeof text);

/*
Types of Datatypes:
1. String
2. Number
3. Boolean
4. NULL
5. undefined
*/

// let upVotes = votingInteresting + votingMindblowing;
// console.log("Upvotes:", upVotes);

// let votesFalse = 4;
// const isCorrect = votesFalse < upVotes;
// console.log(isCorrect);

// FUNCTIONS /////////////////////////////////////////////////////////////

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const factAge = currentYear - year;
//   return factAge;
// }

// console.log(calcFactAge(2000));
// console.log(calcFactAge(2015));
// console.log(calcFactAge(2008));

// IF/ELSE //////////////////////////////////////////////////////////////

// let votingInteresting = 2;
// let votingMindblowing = 28;

// if (votingInteresting === votingMindblowing) {
//   alert("This fact is equally interesting and mindblowing!");
// } else if (votingInteresting > votingMindblowing) {
//   alert("Interesting Fact");
// } else if (votingInteresting < votingMindblowing) {
//   alert("Minblowing Fact");
// }

// if (votingInteresting) {
//   console.log("Interesting Fact");
// } else {
//   console.log("It is falsy");
// }

// falsy values: 0, '', NULL, undefined

// TERNARY OPERATORS ///////////////////////////////////////////////////

// let votesFalse = 4;
// let upVotes = votingInteresting + votingMindblowing;

// const message = upVotes > votesFalse ? "This is true" : "This is false";
// console.log(message);

// STRINGS //////////////////////////////////////////////////////////

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const factAge = currentYear - year;
//   if (factAge >= 0) {
//     return factAge;
//   } else {
//     return "Impossible Year";
//   }
// }

// const text = "Delhi is the capital of India";
// const starter = "This is a fact: ";
// const theFactAge = calcFactAge(2001);

// const upperText = text.toLocaleUpperCase();
// console.log(starter + text + ". This fact is " + factAge + " years old");

// const str = `${starter} ${text}. This fact is ${calcFactAge(2012)} years old`;

// ARROW FUNCTIONS /////////////////////////////////////////////////////

// const calcFactAge2 = (year) =>
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : "This is impossible year";

// console.log(calcFactAge2(2010));
// console.log(calcFactAge(2035));

// ARRAY //////////////////////////////////////////////////////////////

// const facts = ["Delhi is capital of India", 2010, true];
// // console.log(facts[4]);

// const [text, createdIn, isCorrect] = facts;
// // console.log(text);

// const newFacts = [...facts, "society"];
// console.log(newFacts);

// OBJECTS ///////////////////////////////////////////////////////

// const factObj = {
//   text: "Delhi is capital of India",
//   createdIn: 2010,
//   isCorrect: true,
//   createSummary: function () {
//     return `The fact: ${this.text}. Created in ${this.createdIn}`;
//   },
// };

// console.log(factObj.text);
// console.log(factObj["isCorrect"]);

// const { isCorrect, text } = factObj;

// console.log(factObj.createSummary());

// console.log(text);

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// [1, 2, 3, 4, 5].forEach(function (el) {
//   //   console.log(el * 100);
// });

// const times10 = [1, 2, 3, 4, 5].map(function (el) {
//   return el * 10;
// });

// const allCat = CATEGORIES.map((category) => category.name);

// console.log(allCat);

// const initialFacts = [
//   {
//     id: 1,
//     text: "Quantum computing poses a threat to current encryption methods, necessitating urgent updates to cryptographic practices.",
//     source:
//       "https://www2.deloitte.com/us/en/insights/focus/tech-trends.html?utm_source=chatgpt.com",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Potential signs of life detected on exoplanet K2-18b, 124 light-years away, via compounds DMS and DMDS found by JWST.",
//     source:
//       "https://www.thetimes.co.uk/article/were-in-a-golden-age-of-space-discovery-are-we-about-to-find-et-7bptzmltv?utm_source=chatgpt.com",
//     category: "science",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "U.S. national debt reaches $158.6 trillion, equating to $974,000 per taxpayer, largely due to unaccounted obligations.",
//     source:
//       "https://www.truthinaccounting.org/news/detail/financial-state-of-the-union-2025?utm_source=chatgpt.com",
//     category: "finance",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// const calcFactAge2 = (year) =>
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : "This is impossible year";

// const factAge = initialFacts.map((fact) => calcFactAge2(fact.createdIn));

// console.log(factAge);

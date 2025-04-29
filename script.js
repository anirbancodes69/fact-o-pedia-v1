// console.log("Hello World");

// VALUES, VARIABLES & OPERATORS
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

// FUNCTIONS

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const factAge = currentYear - year;
//   return factAge;
// }

// console.log(calcFactAge(2000));
// console.log(calcFactAge(2015));
// console.log(calcFactAge(2008));

// IF/ELSE

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

// TERNARY OPERATORS

// let votesFalse = 4;
// let upVotes = votingInteresting + votingMindblowing;

// const message = upVotes > votesFalse ? "This is true" : "This is false";
// console.log(message);

// STRINGS

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const factAge = currentYear - year;
  if (factAge >= 0) {
    return factAge;
  } else {
    return "Impossible Year";
  }
}

// const text = "Delhi is the capital of India";
// const starter = "This is a fact: ";
// const theFactAge = calcFactAge(2001);

// const upperText = text.toLocaleUpperCase();
// console.log(starter + text + ". This fact is " + factAge + " years old");

// const str = `${starter} ${text}. This fact is ${calcFactAge(2012)} years old`;

// ARROW FUNCTIONS

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : "This is impossible year";

console.log(calcFactAge2(2010));
// console.log(calcFactAge(2035));

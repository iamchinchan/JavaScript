"use strict";
// const country = "India";
// const continent = "Asia";
// let population = 1412;
// console.log(country, continent, population);
// console.log("type of string is: ", typeof string);
// console.log("type of undefined is: ", typeof undefined);
// let declare;
// console.log("type of declare is: ", typeof declare);
// console.log("value of declare is: ", declare);
// let val = null;
// console.log("value of val is: ", val);
// console.log("type of val is: ", typeof val);
// console.log("type of null is: ", typeof null);
// const isIsland = false;
// let language;
// console.log(
//   "types of isIsland, population, country, language respectively are: ",
//   typeof isIsland,
//   typeof population,
//   typeof country,
//   typeof language
// );
// language = "Hindi";
// console.log("type of language now is: ", typeof language);
// console.log("half population is: ", population / 2);
// console.log("population +1 is: ", population + 1);
// const finlandPopulation = 6; // in millians
// console.log(country > finlandPopulation);
// console.log(population < 33);
// const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
// console.log(`hi i am a simple string hureyyy!`);
// console.log(description);
// console.log("hi my name is \n\
// tuntun mossi!");
// console.log(`hola
// amigo`);

// control structure: if-else learnig->
// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`
//   );
// }

// console.log(NaN + 5); // NaN : as we can use operations on a invalid number(NaN)
// console.log(typeof (NaN / 5)); // number

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// console.log("input value from prompt for num of borders is: ", numNeighbours);
// console.log("type of num of neighbours is: ", typeof numNeighbours);
// if (numNeighbours === 1) {
//   console.log("only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("more than 1 border");
// } else if (numNeighbours <= 0) {
//   console.log("no borders");
// } else {
//   console.log("invalid input");
// }

/////////////////**********/////////////////
//fundamentals:2
// const describeCountry = (country, population, capitalCity) => {
//   return `${country} has ${population} million population and it's capital city is: ${capitalCity}`;
// };
// const c1 = describeCountry("India", 1330, "Delhi");
// const c2 = describeCountry("China", 1441, "bolla");
// const c3 = describeCountry("Finland", 20, "hola");
// console.log(c1, "\n", c2, "\n", c3);
// ////////////////
// const worldlPopulation = 7900;
// function percentageOfWorld1(population) {
//   return (population * 100) / worldlPopulation;
// }
// const percentageOfWorld2 = function (population) {
//   return (population * 100) / worldlPopulation;
// };
// const percentageOfWorld3 = (population) =>
//   (population * 100) / worldlPopulation;
// const indiaPopulationPercentage = percentageOfWorld1(1330);
// const chinaPopulationPercentage = percentageOfWorld2(1440);
// const finlandPopulationPercentage = percentageOfWorld3(50);
// console.log(
//   `India: ${indiaPopulationPercentage}, china: ${chinaPopulationPercentage} and Finland: ${finlandPopulationPercentage}`
// );
// const describePopulation = (country, population) =>
//   `${country} has ${population} million people which is about ${percentageOfWorld1(
//     population
//   )}% of the world`;
// console.log(describePopulation("India", 1330));
// console.log(describePopulation("China", 1440));

// const populations = new Array(1330, 1440, 50, 700);
// console.log(populations.length === 4);
// const percentages = new Array();
// for (let i = 0; i < populations.length; i++) {
//   percentages.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentages);
// // console.log(5 === 4.99999999999999999); //true in js 😐
// const neighbours = ["Nepal", "pakistan", "Sri Lanka"];
// neighbours.push("Utopia");
// // console.log(neighbours);
// neighbours.pop();
// neighbours.unshift("India");
// // console.log(neighbours);
// if (!neighbours.includes("Germany"))
//   console.log("Probably not a central European country :D");
// const indexIndia = neighbours.indexOf("India");
// if (indexIndia >= 0) {
//   neighbours[indexIndia] = "Hindustan";
// } else {
//   console.log(
//     "Country you are trying to rename is not  found in the neighbours"
//   );
// }
// console.log(neighbours);
// neighbours.shift();
// const myCountry = new Object({
//   country: "India",
//   capital: "Delhi",
//   language: "Hindi",
//   population: 1330,
//   neighbours: neighbours,
//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighnouring countries and a capital called ${this.capital}`;
//   },
//   checkIsIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//     console.log(`${this.country} is ${this.isIsland ? "" : "not "}a Island`);
//   },
// });

// console.log(myCountry);
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighnouring countries and a capital called ${myCountry.capital}`
// );
// myCountry.population += 2;
// myCountry["population"] -= 2;
// console.log(myCountry);
// console.log("describe fn is: ", myCountry.describe());
// myCountry.checkIsIsland();

// myCountry.neighbours.forEach((neighbours) => {
//   myCountry.neighbours.shift();
// });
// console.log(myCountry.neighbours.length);
// const length = myCountry.neighbours.length;
// console.log(myCountry.neighbours);
// for (let i = 0; i < length; i++) {
//   console.log(myCountry.neighbours.pop(), i);
// }
// myCountry.neighbours.pop();

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];
// listOfNeighbours.forEach((neighbour) => {
//   neighbour.forEach((country) => {
//     console.log(`neighbour: ${country}`);
//   });
// });
// const percentages2 = [];
// populations.forEach((population) => {
//   percentages2.push(percentageOfWorld1(population));
// });
// console.log("percentages2: ", percentages2); //exactly same as percentages 1
// let percentageCounter = 0;
// const percentages3 = [];
// while (percentageCounter < populations.length) {
//   percentages3.push(percentageOfWorld1(populations[percentageCounter++]));
// }
// console.log("percenatges3 is : ", percentages3);

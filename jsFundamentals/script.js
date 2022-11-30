"use strict";
// console.log(10 + 25 + 61 - 20);
// let PI = 3.14;
// PI = 12;
// console.log("pi is : ", PI);

// truthy and falsy values

// if (NaN || undefined || "" || 0 || null || {}) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const day = 1;
// switch (day) {
//   case 1:
//     console.log("i want to earn");
//   // break;
//   default:
//     console.log("a lot!");
// }
// const age = 10;
// console.log(`I like to drink ${age >= 18 ? "Wine 🍷🍾" : "milk 🥛"}`);

/* doubt solved
for (let i = 0; i < 100; i++) {
  console.log(i);
  // if (i === 10) break;
  // i === 10 ? `${break}` : null; // wont work as statements cant be used as operands for ternary conditon operator
}
*/

// let a = false;
// const b = true;
// if (b) aa = true;
// if (a) console.log("i am groot!");

// function noparamsnoreturn() {
//   console.log("hola amigo");
// }
// console.log(noparamsnoreturn());

// Doubt:
// let num = new Number();
// console.log(num);

// let numarr = new Array(4, 5, "hi", 8);
// console.log(numarr);
// numarr = ["4"]; can be changed if let, but not if const
// console.log(numarr);

// const numarr = new Array(4, 5, "hi", 8);
// console.log(numarr);
// numarr[1] = ["4", 5];
// numarr[3] = {
//   arr: [
//     4,
//     {
//       name: "jatin",
//     },
//   ],
//   numL: 5,
//   str: "hi there",
// };
// console.log(numarr);

// const friends = new Array("Divesh", "mulish", "Junaid", "prajjwal", "piyush");
// const friends = ["Divesh", "mulish", "Junaid", "prajjwal", "piyush"];
// console.log(...friends);
// console.log(friends[5]);
// console.log(friends.push("Lovish"));
// console.log(friends);
// console.log(friends.unshift("sexa"));
// console.log(friends);
// console.log(friends.shift());
// console.log(friends);
// console.log(friends.pop());
// console.log(friends);
// friends.push(23);
// console.log(friends);
// console.log(friends.includes(23)); //true
// console.log(friends.includes("23")); //false
// console.log(friends.indexOf("23")); //-1
// console.log(friends.indexOf(23)); // index of 23

// const name1 = "firstname";
// const name2 = "lastname";
// console.log(name1);
// const objectVar = new Object({
//   [name1]: "jatin goyal",
// });
// console.log(objectVar);

const jatin = new Object({
  firstName: "Jatin",
  lastName: "Goyal",
  age: 22,
  job: "learner",
  hasDrivingLicense: false,
  friends: ["Divesh", "Mulish", "Piyush", "Juanid", "Prajjwal"],
  // getSummary: (objectThis) =>
  //   `${objectThis.firstName} is a ${objectThis.age} year old ${
  //     objectThis.job
  //   }, and he has ${
  //     objectThis.hasDrivingLicense ? "a" : "no"
  //   } driver's license`,

  getSummary: function () {
    return `${this.firstName} is a ${this.age} year old ${
      this.job
    }, and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license`;
  },
});
// const varr = 10;
// console.log(jatin);
const nameKey = "Name";
// console.log(jatin["first" + nameKey]);
// console.log(jatin["last" + nameKey]);
const interestedIn = "job";
// console.log(jatin.interestedIn); //undefined
// console.log(jatin[interestedIn]); //actual value in obejct corresponding to key(variable's value)
jatin.location = "Hanumangarh Town";
jatin["instagram"] = "jatin7528";
// console.log(jatin);
// console.log(
//   `${jatin.firstName} has ${jatin.friends.length} friends, and his best friend is ${jatin.friends[0]}`
// );
// console.log(jatin.getSummary); //ibject value: which is a function
// console.log(jatin.getSummary(jatin)); // return value from function
// console.log(jatin.getSummary()); // return value from function

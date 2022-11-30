"use strict";
// coding challenge 4:

// const billValue = 430;
// let tipValue =
//   billValue >= 50 ? (billValue <= 300 ? 0.15 * billValue : 0.2 * billValue) : 0;
// console.log(
//   `the bill was ${billValue}, the tip was ${tipValue} and the total value is: ${
//     billValue + tipValue
//   }`
// );

// tip calculator:
// const calcTip = (billValue) =>
//   billValue < 50 ? 0 : billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// const bills = new Array(125, 555, 44, 50);
// const tips = new Array();
// const totalBillAmount = new Array();
// bills.forEach((bill) => {
//   const tip = calcTip(bill);
//   tips.push(tip);
//   totalBillAmount.push(bill + tip);
// });
// console.log("orignal bills are: ", bills);
// console.log("tips calculated are: ", tips);
// console.log("bill totals are: ", totalBillAmount);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2; // **(power) has higher precedence than /(divide)
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2; // **(power) has higher precedence than /(divide)
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// } else {
//   console.log(
//     `Both ${mark.fullName} and ${john.fullName} have same BMI's {${mark.bmi}}`
//   );
// }

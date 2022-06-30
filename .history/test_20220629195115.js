// function pow(a, b) {
//   return a ** b;
// }

// console.log(pow(3, 4));
// console.log(pow(3, 2));
// console.log(pow(1, 1));

function createStateForComand(comandName) {
  let counter = 1;

  return `${comandName} забила ${counter} гол`;
}

comandOneGoal = createStateForComand("команда 1");
comandTwoGoal = createStateForComand("команда 2");

console.log(comandOneGoal(1));
console.log(comandOneGoal(1));
console.log(comandOneGoal(1));

console.log(comandTwoGoal(1));
console.log(comandTwoGoal(1));

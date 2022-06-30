// function pow(a, b) {
//   return a ** b;
// }

// console.log(pow(3, 4));
// console.log(pow(3, 2));
// console.log(pow(1, 1));

function createStateForCommand(comandName) {
  let counter = 1;

  return function b(score) {
    return `${comandName} забила ${counter + score}й гол`;
  };
}

let commandOneAdd = createStateForCommand("command1");
let commandTwoAdd = createStateForCommand("command2");

console.log(commandOneAdd(2));
console.log(commandTwoAdd(2));
console.log(commandTwoAdd(2));
console.log(commandOneAdd(2));
console.log(commandOneAdd(2));

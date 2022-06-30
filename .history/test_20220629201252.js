// function pow(a, b) {
//   return a ** b;
// }

// console.log(pow(3, 4));
// console.log(pow(3, 2));
// console.log(pow(1, 1));

function createStateForCommand(comandName) {
  let counter = 1;

  return function b() {
    return `${comandName} забила ${counter++}й гол`;
  };
}

let commandOneAdd = createStateForCommand("command1");
let commandTwoAdd = createStateForCommand("command2");

console.log(commandOneAdd());
console.log(commandTwoAdd());
console.log(commandTwoAdd());
console.log(commandOneAdd());
console.log(commandOneAdd());

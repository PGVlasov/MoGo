// function pow(a, b) {
//   return a ** b;
// }

// console.log(pow(3, 4));
// console.log(pow(3, 2));
// console.log(pow(1, 1));

function createStateForCommand(comandName) {
  let counter = 1;

  return `${comandName} забила ${counter}й гол`;
}


​let commandOneAdd = createStateForCommand("Команда 1"); 
let commandTwoAdd = createStateForCommand("Команда 2");

console.log(createStateForCommand());
console.log(createStateForCommand);
console.log(createStateForCommand);

console.log(createStateForCommand);
console.log(createStateForCommand);

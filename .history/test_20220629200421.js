// function pow(a, b) {
//   return a ** b;
// }

// console.log(pow(3, 4));
// console.log(pow(3, 2));
// console.log(pow(1, 1));

function createStateForCommand(comandName) {
  let counter = 1;
  counter++
  return `${comandName} забила ${counter}й гол`;
}


const ​commandOneAdd = ()=>{createStateForCommand("Команда 1")}
const commandTwoAdd = ()=>createStateForCommand("Команда 2");

console.log(commandOneAdd());
console.log(commandOneAdd());
console.log(commandOneAdd());

console.log(commandTwoAdd);
console.log(commandTwoAdd);

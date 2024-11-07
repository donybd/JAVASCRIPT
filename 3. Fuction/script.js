console.log("-----CASE 1-----");
function printHeart() {
  console.log("<3");
}
printHeart();

console.log("-----CASE 2-----");
function multiply(a, b) {
  return console.log(a * b);
}
multiply(2, 3); // 6
multiply(9, 9); // 81
multiply(5, 4); // 20

console.log("-----CASE 3-----");
let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe();

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);

console.log("-----CASE 4-----");
const sayHello = (nama) => {
  console.log(`Hello ${nama}!`);
};
sayHello("Hagrid");
sayHello("Luna");
sayHello("dony");
sayHello("Yoi");

function myFirst() {
  myDisplayer("Good Bye");
}
function mySecond(callback) {
  myDisplayer("Hello");
  callback();
}
function myDisplayer(message) {
  console.log(message);
}
mySecond(myFirst);

console.log("Paragraf 1");
setTimeout(() => {
  console.log("Paragraf 2");
}, 4000);
console.log("Paragraf 3");
console.log("Paragraf 4");
console.log("Paragraf 5");
console.log("Paragraf 6");
console.log("Paragraf 7");
console.log("Paragraf 8");
console.log("Paragraf 9");

function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");

function bagi(a, b) {
  try {
    if (a === undefined || b === undefined) {
      throw new Error("input harus 22nnya ada");
    }
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input harus berupa angka");
    }

    if (b === 0) {
      throw new Error("Tidak bisa membagi dengan nol");
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
console.log(bagi("a"));
console.log(bagi(10, "a"));

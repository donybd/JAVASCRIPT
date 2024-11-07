// Split
// const foods = "Mie, Nasgor, Sate, Lontong, Naslur";
// const SplittedFoods = foods.split(",");
// console.log(SplittedFoods);

//Replace
// console.log(foods.replace("Naslur", "Nasi Ayam"));

// ARRAY
// PUSH
// const tropicalFruits = ["Coconut", "Apple", "Rambutan", "Mango"];
// console.log("Jumlah Array Setelah Ditambahkan Data Baru" + tropicalFruits.push("Durian"));
// console.log(tropicalFruits);

// POP
// const newtropicalFruits = tropicalFruits;
// newtropicalFruits.pop();
// console.log(tropicalFruits);
// console.log(newtropicalFruits);

// const newTropicalFruits = [...tropicalFruits];
// newTropicalFruits.pop();
// console.log(`Array lama : ` + tropicalFruits);
// console.log(`Array baru : ` + newTropicalFruits);

// SHIFT
// newTropicalFruits.shift();
// console.log(newTropicalFruits);

// UNSHIFT
// const myFavoriteFruits = ["Melon", "Grapes"];
// newTropicalFruits.unshift("Pineapple", "Banana", ...myFavoriteFruits);
// console.log(newTropicalFruits);

// CONCAT
// const elsiFavFruits = ["Durian", "Kelengkang"];

// const favFruits = newTropicalFruits.concat(elsiFavFruits);
// console.log(favFruits);

// const arrNum1 = [1, 2, 3, 1, 4, 6];
// const arrNum2 = [9, 7, 8, 5];
// const arrNum3 = [...arrNum1, ...arrNum2];
// console.log(arrNum3);

// REDUCE
// const totalNum = arrNum3.reduce((acc, currItem) => acc + currItem);
// console.log(totalNum);

// ForEach
// favFruits.forEach((fruit, index) => console.log(`Index ke ${index} buah: ${fruit}`));

// Find
// console.log("Array NUM3 " + arrNum3);
// const findNumberLargerThan2 = arrNum3.find((num) => num > 2);
// console.log(findNumberLargerThan2);

//Case JS Array
//array antrian
const antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Antrian Awal : " + antrian);
// Nambah antrian
antrian.push("Nabila");
antrian.push("Maza", "Elsi");
console.log("Antrian kedua : " + antrian);
// Elsi pulang
antrian.pop();
console.log("Antrian ketiga : " + antrian);
//1,2 pulang
antrian.shift();
antrian.shift();
console.log("Antrian keempat : " + antrian);
// Tomi
antrian.unshift("Tomi");

console.log("Antrian akhir : " + antrian);

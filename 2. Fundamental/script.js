// let x = "Celerates ";
// let y = 2024;

// alert(x + y);
// console.log(x + y);

// let x = ["Dog", "Cat"];
// x[3] = "Bird";
// alert(x);

// let x = { firstname: "Dony", lastname: "Benaya" };
// console.log(x);

//alert
let sambutan = "Selamat Datang di Rental Mobil Jogja !";
alert(sambutan);

let daftar = ["Avanza", "Xenia", "Brio"];
console.log("Daftar Mobil : " + daftar);

let mobil1 = "Avanza";
let tersedia1 = true;
let harga1 = 300000;

let mobil2 = "Brio";
let tersedia2 = false;
let harga2 = 450000;

let mobil3 = "Xenia";
let tersedia3 = true;
let harga3 = 250000;

console.log(harga1 < harga2);

let listMobil = [
  { nama: "Toyota Avanza", hargaSewa: 300000, tersedia: true },
  { nama: "Daihatsu Xenia", hargaSewa: 250000, tersedia: false },
  { nama: "Honda Brio", hargaSewa: 450000, tersedia: true },
];

console.log("Mobil yang tersedia dan harga sewanya:");

listMobil.forEach((mobil) => {
  if (mobil.tersedia) {
    console.log(`${mobil.nama} - Rp ${mobil.hargaSewa}`);
  }
});

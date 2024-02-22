let nilai = 100;

if (nilai >= 80 && nilai <= 100) {
  nilai = "A";
} else if (nilai >= 70 && nilai < 80) {
  nilai = "B";
} else if (nilai >= 60 && nilai < 70) {
  nilai = "C";
} else {
  nilai = "D";
}

console.log(nilai);
nilai = 60;
//&& semua kondisi harus terpenuhi lalu dia akan menghasilkan nilai true
//or salah satu harus terpenuhi lalu dia akan menghasilkan nilai true

let banding = nilai >= 80 && nilai < 100; //antara true atau false
console.log(banding, "&&");
let banding2 = nilai >= 80 || nilai < 100; //antara true atau false
console.log(banding2, "||");
let banding3 = nilai != 50;
console.log(banding3, "!");

//apa bedanya == dengan ===
let X = 50; //tipe data number
let Y = "50"; //tipe data string

let banding4 = X == Y;
console.log(banding4, "=="); //== tipe datanya GA harus sama
let banding5 = X === Y;
console.log(banding4, "==="); //=== tipe datanya harus sama

//if else bisa di buat secara bersarang
let number = 7;
if (number > 5) {
  if (number % 2 === 0) {
    console.log("lebih besar dari 5 dan genap");
  } else {
    console.log("lebih besar dari 5 dan ganjil");
  }
} else {
  if (number % 2 === 0) {
    console.log("lebih kecil atau sama dengan dari 5 dan genap");
  } else {
    console.log("lebih kecil atau sama dengan dari 5 dan ganjil");
  }
}

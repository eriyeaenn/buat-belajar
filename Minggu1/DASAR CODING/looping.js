//while ()
//for ()

//let i = 5;

// //while (i > 5){
//     console.log(i)
//     i++
// }

//dalam looping ada yang namanya arah , kiri atau kanan. kiri itu pengurangan, kanan itu pertambahan
//hati hati akan infinite loop / loopnya tidak jalan

// //for (let i = 1; i >= 0; i--) {
//     console.log(i)
// }

let nama = "riyan";

//ada yang namanya metode length untuk tipe data string dan array
//method length mengembalikan nilai angka, total huruf yang ada pada string, atau total element yang ada pada array

//for (let i = 0; i < name.length; i++) {
//     console.log(name[i])
// }
//oke jadi, pada tipe data string atau array di javascript, ada yang namanya index
//dimana index itu SUDAH PASTI berawal dari 0;

// console.log(name[0] + name[5])

//diberikan kasus untuk mengembalikan suatu kata, tanpa menggunakan metode reserve

// let name = "riyan"; //length 5, sedangkan index itu dari 0, r-> 0, i->, y->2, a->3, n->4
// let result = "";

// for (let i = name.length - 1; i >= 0; i--) {
//   //i = 5 - 1; 5 - 1 >= 0; i--
//   result += name[i]; //r => ri => riy => riya => riyan
//   //ada perintal lagi,
// }
// console.log(result);
let result = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(j);
  }
  console.log("");
}
console.log("selesai");

//kesimpulan
//looping di gunakan untuk perulangan looping juga memudahkan dalam membuat tipe data yg sangat banyak
//looping bisa bersarang
//looping bisa di satukan dengan array

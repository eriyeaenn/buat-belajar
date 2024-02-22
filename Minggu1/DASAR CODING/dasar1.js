// cara membuat variabel
// untuk mendeklarasikan variabel dalam JavaScript

var a = "a"; //tidak boleh digunakan
let b = "b"; //nilai yang bisa di ubah
const c = "c"; //nilai konstanta / tidak bisa di ubah

//variabel bisa menampug tipe data string (text), integer(number), boolean, array, object
let nama = "riyan hidayat"; //string
let umur = 18; //number
let apakahBenar = true; //boolean
let uang = 5000.5; //number namun ada koma

//operator aritmatika

let angka1 = 10;
let angka2 = 20;

console.log(angka1 + angka2, "pertambahan");
console.log(angka1 - angka2, "pengurangan");
console.log(angka1 * angka2, "perkalian");
console.log(angka1 / angka2, "pembagian");
console.log(angka1 % angka2, "modulus");

//disini kita belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); //30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); //-10

penampungHasilOperatorAritmatika = angka1 * angka2; //200
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2; //0.5
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika); //10

//string bisa ditambah namun string tidak bisa di kurang dengan operator aritmatika
let firstName = "riyan";
let lastName = "hidayat";
let fullName = firstName + lastName;
console.log(fullName);
console.log(firstName + " " + lastName); //untuk menambahkan space
console.log(firstName - lastName); //bisa tapi menghasilkan nilai NaN

//alur pembacaan code
//untuk membaca code kalian  harus membacanya dari kiri ke kanan dan dari atas ke bawah

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false;
console.log(number + 10); //10

//pertanyaanya kenapa number + 10 tetap menjadi 10 karena false = 0, true = 1;
console.log(true + 10); //11

//membaca error
//error itu jangan kalian takuti justru kalian harus takut tidak ada yang namanya error dalam pemrograman
//karena dalam pekerjaan suatu fitur berjalan namun ada bug tapi tidak error, otu bikin si programer rada muak buat mencari errornya atau letak kesalahannya

//contoh error
// const hewan = "jerapah";
// console.log(hewan);
// hewan = "buaya";

//auto komentar bisa mencet ctrl + /

//tipsnya adalah selalu teliti, dan kalau ada error dibaca aja, dan belajar ngoding itu perlu kebiasaan. Karena ngoding itu adalah habbit

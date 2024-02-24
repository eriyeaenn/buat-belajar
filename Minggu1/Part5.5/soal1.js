// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

//isi variabel nama dan peran berisi ksatria, tabib dan penyihir
//gunakan metode if else untuk nama
//jika nama kosong tampilan output berupa : nama wajib diisi!!
//gunakan if else bersarang di if yang berisi peran ksatria, tabib dan penyihir
//tampilkan output berupa variabel nama yang sudah di isi dan peran yang sudah diisi
//jika peran kosong tampilan output berupa : "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

let nama = "riyan";
let peran = "ksatria";

if (nama === "") {
  console.log("Maka nama wajib diisi");
} else if (nama && peran === "") {
  console.log("Pilih peran mu untuk memulai game");
} else if (nama && peran) {
  if (peran == "ksatria") {
    console.log(
      `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`
    );
  } else if (peran == "tabib") {
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
  } else if (peran == "penyihir") {
    console.log(
      `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
    );
  } else {
    console.log(
      "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
    );
  }
} else {
}

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

for (let i = 0; i < 5; i++) {
  let x = "";
  for (let j = 0; j <= i; j++) {
    x += "*";
  }
  console.log(x);
}

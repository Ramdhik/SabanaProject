let x = 2,
  y = 4;

let tambah = x + y;
console.log('Hasil pejumlahan : ', tambah);

let kurang = x - y;
console.log('Hasil pengurangan : ', kurang);

let perkalian = x * y;
console.log('Hasil perkalian : ', perkalian);

let modulus = x % y;
console.log('Hasil modulus : ', modulus);

//Perbandingan
let a = 2,
  b = 4,
  c = '2';
console.log('hasil a==c : ', a == c);
console.log('hasil a===c : ', a === c);
console.log('hasil a!=b : ', a != b);

//logika
console.log('hasil logika AND (true) : ', a != b && a < b);
console.log('hasil logika OR (false) : ', a != b || a > b);

//penugasan
console.log('hasil a += b : ', (a += b));
console.log('hasil a *= b : ', (a *= b));
console.log('hasil a -= b : ', (a -= b));

//ternary
a > b ? console.log('Nilai a lebih besar daripada nilai b') : console.log('Nilai a tidak lebih besar dari nilai b');

//conditional
let age = 18;
if (age >= 18) {
  console.log('Anda sudah cukup umur!');
} else if (age >= 15) {
  console.log('Anda Sudah remaja');
} else {
  console.log('Anda belum cukup umur!');
}

let kata = prompt('Masukan kata : ');
// //looping
// for (let i = 0; i < 5; i++) {
//   document.write(i + '<br>');
// }

// let i = 0;
// while (i < 5) {
//   document.write(i + '<br>');
//   i++;
// }

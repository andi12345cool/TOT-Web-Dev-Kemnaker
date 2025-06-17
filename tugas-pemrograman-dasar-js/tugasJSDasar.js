var perkenalan = 'Nama saya adalah';
var nama = "andi" // isi dengan nama kalian
var kata1 = "saya"
var kata2 = "berharap"
var kata3 = "untuk"
var kata4 = "menjadi"
var kata5 = "seorang"
var kata6 = "software"
var kata7 = "engineer"
console.log (perkenalan + " " + nama + " " + kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7)

// Soal No.2 Kombinasi Huruf & Angka Password (Akses karakter dalam string)
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789";

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3];
console.log("password ke satu: " + password1);

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
console.log("password ke dua: " + password2);

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + abjad[8] + angka[4];
console.log("password ke tiga: " + password3);

// Soal No. 3 Mengurai Kalimat (Substring)
var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);
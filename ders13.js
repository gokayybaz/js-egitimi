// Math - Matematik Kütüphanesi

// Pi sayısını alma ve onu bir değişkene atama işlemi
let piSayisi = Math.PI

// Yuvarlama işlemleri

// Bir sayının ondalıklı kısmına yuvarlama işlemi ;
let sayi = 25.4
let ondalikLiYuvarla = Math.round(sayi)
// Eğer ondalık kısmı 5ten büyükse bir üst sayıya, eğer 5ten küçükse bir alttaki sayıya yuvarlama işlemi yapar.

// Bir ondalıklı sayıyı virgülden sonrası ne olursa olsun bir üst değere yuvarlama işlemi
let sayi2 = 25.2
let ustDegereYuvarla = Math.ceil(sayi2)

// Bir ondalıklı sayıyı virgülden sonrası ne olursa olsun bir alt değere yuvarlama işlemi
let sayi3 = 36.89
let altDegereYuvarla = Math.floor(sayi3)

// Üslü çarpım yapma işlemi
let sayi4 = 5
let usDegeri = 8
let usluCarpim = Math.pow(sayi4,usDegeri)
// İlk önce sayıyı, daha sonra üs değerini veriyoruz.

// Karekök alma işlemi
let sayi5 = 16
let karekokAlma = Math.sqrt(sayi5) // 4

// Mutlak değer işlemi
let sayi6 = -89
let mutlakDeger = Math.abs(sayi6)
// İçerisine ne gönderilse gönderilsin pozitif olarak dışarıya çıkar.

// Sinüs Kosinüs işlemi
let sinus = Math.sin(64)
let kosinus = Math.cos(64)

// Sayı grubunda en büyük ve en küçük değeri alma işlemi
let sayi7 = 52
let sayi8 = 26
let enKucukDeger = Math.min(sayi7,sayi8)
let enBuyukDeger = Math.max(sayi7,sayi8)

// 0 ila 1 arasında rastgele sayı döndürme işlemi
let rastgeleSayi = Math.random()

// 0 ila 10 arasında rastgele sayı döndürme işlemi
let rastgeleSayi2 = Math.round(Math.random() * 10)
// yuvarlama yapmamızın sebebi 0 ila 10 arasında ondalıklı sayı üretmesidir.
// Math.random 0 ila 1 arasındaydı ama onu 10 ile çarpınca mantıken 0 ila 10 arasında olur.

// Notlar

/* 
   Not - 1 : Yuvarlama işlemi yaparken floor kullanırsak hiçbir zaman 10 değerini göremeyiz. 
   Çünkü alt değere yuvarlar. Ama ceil kullanırsak hiçbir zaman 0 değerini göremeyiz, çünkü 1 ila 10 arasında olur.
   Bu da ceil'in her zaman bir üste yuvarlamasıdır.
*/

/*
   Not - 2 : Rastgele üretilen sayıya ekleme yapabiliriz.
   Örnek ;
   let rastgele = (Math.round(Math.random()*10))+10
   her rastgele ürettiği sayıya 10 ekleyecek.
*/

// Aritmetik operatörler

// İşlem yapılacak değişkenler
let sayi1 = 25
let sayi2 = 15

// Toplama işlemi
let toplamaSonucu = sayi1 + sayi2
console.log(`Toplama sonucu : ${toplamaSonucu}`)

// Çarpma işlemi
let carpmaSonucu = sayi1 * sayi2
console.log(`Çarpma sonucu : ${carpmaSonucu}`)

// Çıkarma işlemi
let cikarmaSonucu = sayi1 - sayi2
console.log(`Çıkarma sonucu : ${cikarmaSonucu}`)

// Bölme işlemi
let bolmeSonucu = sayi1 / sayi2
console.log(bolmeSonucu)

// Bölümünden kalanını bulma işlemi
let bolumundenKalaniSonucu = sayi1 % sayi2
console.log(bolumundenKalaniSonucu)

// Sayının üs değerini bulma işlemi
let usDegeri = 5
let usDegeriSonucu = sayi1 ** usDegeri
console.log(usDegeriSonucu)

// Sayının değerini kısayoldan bir arttırma ve azaltma

// Arttırma
sayi1++
console.log(sayi1)

// Azaltma
sayi1--
console.log(sayi1)

// += operatörü kullanımı
// eğer bir değişkenin değerini kendisinin ve diğer değişkenin toplamı yapmak istersek bu operatörü kullanırız.

let sayi3 = 15
let sayi4 = 28

let degeriKendisininVeDigerDegiskeninToplamıSonucu = sayi3+=sayi4
console.log(degeriKendisininVeDigerDegiskeninToplamıSonucu)

// aynı mantık diğer aritmetik işlemlerde de geçerlidir.
// "-=", "*=", "/=", "**=", "%=" vb.


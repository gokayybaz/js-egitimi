// Numbers - Sayılar

// Number tanımlama

let number1 = 53
let number2 = 14.58

// 10 üzeri şeklinde üslü sayı tanımlama

let sayi = 3e15

// yukarıdaki "e" : 10 üzerinden demektir.
// yani 3 ün 10 üzerinden 15 ile çarpımı demek oluyor.

// NaN : Not a Number (Sayı Değil) demektir.
// Genellikle string bir ifade ile number ifade arasında matematiksel işlemler yaptığımızda bu hata karşımıza çıkar.
// Toplama hariç çünkü toplamada string toplama olarak algılayacaktır.

// Sayısal bir ifadeyi metinsel bir ifadeye çevirme (number to string)
let sayi2 = 15
console.log(typeof sayi2)

sayi2 = sayi2.toString()

console.log(typeof sayi2)

// Not : yukarıda sayi2 yi tanımladıktan sonra sayi2 yi sayi2'nin metinsel ifadeye çevrilmiş haline eşitlememizin sebebi
// Eğer eşitleme yani atama yapmazsak yine Number sonucunu alacaktık. Çünkü JS en son atanan değere göre hareket eder.
// Bundan dolayı sayi2 yi biz sonradan önceki sayi2 nin metinsel haline çevrilmiş değerine eşitliyoruz.

// Sayıyı üstel sayıya çevirme

let x = 312654.45

x = x.toExponential(4)

document.writeln(x)

// Virgüllü sayılarda virgülden sonra kaç haneyi göstereceğini belirleme

let x3 = 34.2568622863

x3 = x3.toFixed(5)

// toPrecision() metodu

// İçerisine girdiğimiz değer kadar virgülden sonraki basamağı gösterir. Sonrasını üstel sayı olarak gösterir.

let c4 = 315.45678910

c4 = c4.toPrecision(5)


// Number tipinde olmayan bir sayı ifadesini Number tipine çevirme

let stringNumber = "45"
stringNumber = Number(stringNumber)
document.write(typeof stringNumber)

// Not : Boşluk veya virgülle oluşturulmuş string ifadenin tipini çevirebiliriz fakat
// yazdırmak istediğimiz zaman NaN dönecektir.

// Number değerdeki string ifadeyi int'a çevirme

let b5 = "45"
b5 = parseInt(b5)
document.write(typeof b5)

// Not : Number'a çevirme işleminden farklı olarak boşluklu veya virgüllü bir string ifade olsa bile
// ilk int değeri alınacaktır.

// Number değerindeki sting ifadeyi floata çevirme

let b6 = "45.2145"
b6 = parseFloat(b6)
document.write(typeof b6)

// Not : Bundada Number'a çevirme işleminde olduğu gibi boşluk veya virgül kullanmamalıyız.

// JS'de numberın max değerini görme
let numberMax = Number.MAX_VALUE

// JS'de numberın min değerini görme
let numberMin = Number.MIN_VALUE

let numberInfinity = Number.POSITIVE_INFINITY

let numberNegativeInfinity = Number.NEGATIVE_INFINITY
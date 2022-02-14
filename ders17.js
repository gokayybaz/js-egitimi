// Ternary Operator

// Mantığı tamamen if else ile aynıdır.
// Sadece if else'yi kısa yazmak için kullanılır.
// Hemen bir örnek yapalım ;

let sayi1 = 48
let sayi2 = 96

let karsilastir = (sayi1 < sayi2) ? "Sayı 1, Sayı 2den Küçüktür." : "Sayı 1, Sayı 2'den Büyüktür."
console.log(karsilastir)

// Gelelim kodu açıklamaya ;

/*
  (kosul) : parantez içerisine koşul yazılır.
  ? (if) : Eğer demektir.
  ?'nin yanındaki string ifade if'in içerisindeki kod olarak düşünülebilir.
  Not : Buraya sadece string değil koşula uyduğunda yapmasını istediğimiz herşeyi yazabiliriz.
  : (else) : Değil ise demektir.
  :'nin yanındaki ifade else'nin içerisindeki kod olarak düşünülebilir.
  Not : Buraya aynı şekilde string değil koşula uymadığında yapmasını istediğimiz herşeyi yazabiliriz.

  Genel Not : Şimdi bu koşula uyuyorsa ?'nin yanındaki string değeri karsilastir değişkeninin değerine atayacak, 
  koşula uymuyorsa :'nin yanındaki string değeri karsilastir değişkeninin değerine atayacak.
  // Görmek için bir yerde çıktı işlemi yapmamız gerekiyor. (Konsola yazdırma vb.)

  Genel Not2 : Aynı şekilde string yerine fonksiyonlarda yazabiliriz.
  Sadece kullanmak için değişkeni fonksiyon çağırır gibi çağırmamız gerekir.
  Hemen bir örnek yapalım ;

  let karsilastir2 = (sayi1 < sayi2) ? function ekranaYazdir(){
    document.write("sayi1, sayi2'den Küçüktür.")
    }  : function consolaYazdir(){
    document.write("sayi1, sayi2'den Büyüktür.")
   }
   karsilastir2()

   Şeklinde fonksiyonlarda yazabiliriz.
*/


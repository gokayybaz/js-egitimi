// Array Sıralama

let notebookMarkalari = ["Asus","Lenovo","HP","Dell","MSI","Monster"]

// Alfabetik bir sıraya koymak istersek ;
notebookMarkalari.sort()
// sort metodu arraylari alfabetik sıraya koyar.
console.log(notebookMarkalari)

// Sıralamayı tam tersine çevirmek istersek ;
notebookMarkalari.reverse()
// reverse metodu array sıralamasını tam tersine çevirir.
console.log(notebookMarkalari)

let notlarim = [
    96,
    88,
    75,
    85
]

// sort metodunu sayı barındıran bir dizide kullanırsak ;
notlarim.sort()
console.log(notlarim)
// Sayıları büyükten küçüğe veya küçükten büyüğe sıralamaz.
// Sıralaması aynen şu şekilde olur ;
// Sayıları rakamlarına göre sıralar (0 - 9)
// En önce ilk rakamlarına bakar en küçüğünü en başa yazar.
// Daha sonra diğer basamaklarındaki rakamlara bakar ve rakamların büyüklüğüne göre sıralama yapar.

// Peki ya biz küçükten büyüğe veya büyükten küçüğe doğru bir sıralama yapmak istersek ;

// İlk önce küçükten büyüğe doğru bir sıralama yapalım ;

notlarim.sort(
    function (sayi1, sayi2){
        return sayi1-sayi2
    }
    // bu tür metod içerisine yazılan fonksiyonlara compare function denir. JS'de önceden tanımlıdır.
)
// Gelelim çalışma mantığına ; 
/*
   İlk önce şunu bilelim fonksiyon bizim not listemizdeki elemanları ikili ikili gruplara ayırıyor, ve öyle inceliyor.
   daha sonra sayi1 ile sayi2 nin çıkarma sonucu değeri negatifse bu durumda sayi2 sayi1'den büyük oluyor.
   ve sayı1 başa geçiyor sayı2 yanına geçiyor. Eğer çıkarma sonucu pozitifse bu durumda sayi1 sayi2den büyük oluyor,
   ve sayi2 başa geçiyor ve sayı1 yanına geçiyor. Böyle böyle tüm elemanları inceleyerek bize küçükten büyüğe doğru bir sıralama
   yapmış oluyor js.

   Yukarıdaki anlattığım küçükten büyüğe doğru sıralama idi.
*/

// Şimdi gelelim büyükten küçüğe doğru sıralamaya ;
notlarim.sort(
    function (sayi1,sayi2){
        return sayi2-sayi1
    }
)
// Gelelim çalışma mantığına ;
/*
   İlk önce şunu bilelim fonksiyon bizim not listemizdeki elemanları ikili ikili gruplara ayırıyor, ve öyle inceliyor.
   daha sonra sayi2 ile sayi1 in çıkarma sonucu negatifse sayi1 sayi2den büyük oluyor. Bu durumda sayi1 başa geçiyor ve sayı2 yanına geçiyor.
   Ama sonuç pozitifse sayi2 sayı1 den büyük oluyor ve sayı1 başa geçiyor ve sayi2 yanına geçiyor.
   Böyle böyle tüm elemanları sıralayarak bize büyükten küçüğe doğru bir sıralama yapmış oluyor js.
   
   Yukarıda anlattığım büyükten küçüğe doğru sıralama idi.
*/
console.log(notlarim)

// Sayıları büyükten küçüğe veya küçükten büyüğe doğru sıraladıktan sonra gelelim listedeki en küçük ve en büyük değerleri almaya ;

// Sıralama küçükten büyüğe doğruysa

// ilk eleman en küçük olacağı için : notlarim[0] ile en küçük değeri alırız.
// son eleman en büyük olacağı için : notlarim[notlarim.length - 1] ile en büyük değeri alırız.

// Sıralama büyükten küçüğe doğruysa

// ilk eleman en büyük olacağı için : notlarim[0] ile en büyük değeri alırız.
// son eleman en küçük olacağı için : notlarim[notlarim.length - 1] ile en küçük değeri alırız.

// Arraya objede ekleyebiliyoruz eleman olarak bununla ilgili güzel bir örnek ./dizi-siralama-ornek.js dosyasında mevcuttur.

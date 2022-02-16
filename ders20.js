// While döngüsü

// Hemen bir while döngüsü oluşturalım

let i = 0 //Başlangıç değişkeni ve değeri

// Döngünün çalışması için koşul
while(i<15 ){
    //Çalışacak kodlar
    console.log("Hello JS")
    // Başlangıç değerini tek tek arttırma işlemi
    i++
}

// Not : While döngüsü koşulu true olduğu sürece çalışır.
// Buna göre while döngüsü ile sonsuz döngü oluşturmak çok basittir.
// while(true){
//     console.log("Sonsuza kadar gider...")
// }

// For Döngüsü ile While Döngüsü arasındaki temel farklar ;

// While döngüsünde başlangıç değişkeni ve değeri dışarıda tanımlanır.
// For döngüsünde ise başlangıç değişkeni ve değeri parantez içerisinde tanımlanır.

// While döngüsünde parantez içerisine sadece koşul yazılır.
// For döngüsünde parantez içerisine başlangıç değişkeni ve değeri, koşul ve arttırma operatörü yazılır.

// While döngüsünde arttırma operatörü kod bloğunun içerisinde herhangi biryere yazılabilir.
// For döngüsünde arttırma operatörü parantez içerisine yazılır.

// While döngüsünde koşul true olduğu sürece çalışır demiştik ama şöyle bir işlem yapabiliriz ;
/*
   Koşula true verip,
   Koşulu kod bloğunun içerisine yazabiliriz.
*/

// Hemen bir örnek yapalım ;
// let index = 0
// while(true){
//     console.log("Hello World")
    
//     if (index > 20) {
//         break
//     }
//     index++
// }

// Böyle koşulu kod bloğu içerisinde de yazabiliriz.
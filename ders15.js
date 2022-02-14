// Comparison and Logical Operators - Kıyaslama ve Mantıksal Operatörler

// Hemen iki adet değişken oluşturalım ;

let sayi1 = 15
let sayi2 = 23  //28

// Şimdi oluşturduğumuz değişkenlerin değerinin birbirine eşit olma durumunu sorgulayalım ;
let kiyasla = (sayi1 == sayi2)
console.log(kiyasla) // Değerleri eşit olmadığı için false dönecektir.

// Oluşturduğumuz değişkenlerin hem değerlerini hem de değişken tiplerinin eşit olma durumunu kontrol edelim ;
let kiyasla2 = (sayi1 === sayi2)
console.log(kiyasla2) // Hem değerler hem de tipler eşit olmadığı için bize false dönecektir.

// Eğer ikisinin değerlerini eşitleyip birini string diğerini number yapsaydık birinci kıyaslamamız doğru çıkacaktı,
// ikinci hem tipe göre kıyasladığı için false dönecekti.

// Şimdi ise oluşturduğumuz değişkenlerin değerlerinin eşit olmama durumunu sorgulayalım ;
let kiyasla3 = (sayi1 != sayi2)
console.log(kiyasla3) // Değerler eşit olmadığı için true dönecektir.
// Çünkü sorguda sayi1'in değeri sayi2'nin değerine eşit değilmidir ? sorgusunu sorduk
// Eşit olmadığı için true döndü :)

// Aynı şekilde hem değişken değerinin hemde değişken tipinin eşit olmama durumunu sorgulayalım ;
let kiyasla4 = (sayi1 !== sayi2)
console.log(kiyasla4) // Burada değişkenin tipi eşit ama değişkenin değeri birbirine eşit olmadığı için bize true sonucunu döndü.

// Şimdi ise sayıları birbirinden küçükmü veya büyükmü şeklinde sorgulayalım ;
let kiyasla5 = (sayi1 > sayi2)
console.log(kiyasla5) // sayi1 sayi2'den küçük olduğu için bize false değerini döndü.

let kiyasla6 = (sayi2 < sayi1)
console.log(kiyasla6) // sayi2 sayi1'den büyük olduğu için bize false değerini döndü.

// Şimdi ise sayıları hem eşitmi aynı zamanda büyük veya küçükmü şeklinde sorgulayalım ;
let kiyasla7 = (sayi1 <= sayi2)
console.log(kiyasla7) // sayi1 sayi2'den küçük olduğu için true değerini döndü.
// Bu kıyas operatörümüz şu demek oluyor : sayi1'in değeri küçükmü veya eşitmi sayi2'nin değerine
let kiyasla8 = (sayi2 >= sayi1)
console.log(kiyasla8) // sayi2 sayi1'den büyük olduğu için true değerini döndü.
// Bu kıyas operatörümüz şu demek oluyor : sayi2'nin değeri büyükmü veya eşitmi sayi1'in değerine

// Mantıksal operatörler

let sayi3 = 25
let sayi4 = 29

// Ve (&&) operatörü

let karsilastir = (sayi1>sayi2) && (sayi3<sayi4)
console.log(karsilastir)

// Ve operatöründe true değerini almak için mutlaka her iki işlemde true olmalıdır.
// Biri true biri false olduğu zaman false olur.
// İkisi de false olduğu zaman false olur.
// Bunun sebebini şu şekilde açıklayabiliriz ;
// true = 1 false = 0 'a bu ifadeyi biliyoruz.
// şimdi ve operatöründe şöyle denir ;
// birinci true dönünce 1 olur ikinci false dönünce 0 olur.
// ve operatöründe çarpma mantığı vardır 1 * 0 = 0 yani false olur.
// yani birinci yanlış ikinci doğru olunca bize yanlış döner kısacası.

// Veya (||) operatörü

let karsilastir2 = (sayi1 < sayi2) || (sayi3<sayi4)
console.log(karsilastir2)

// Veya operatöründe true değerini almak için birisinin sonucunun true olması yeterlidir.
// Biri true diğeri false olursa true döner.
// False değerini almak için ikisininde döndürdüğü değer false olması gerekir.
// Ve operatörü çarpma yapıyordu, Veya operatörü ise toplama yapar.
// true = 1 , false = 0 // makina dilinde
// birinci true = 1, ikinci false = 0 çıkınca toplam : 1 (true) olur.
// Mantık tamamen bu kadar basittir.

// ! (Herşeyi ters veya olumsuz Hale Getirir.) Operatörü

// Adı üzerinde kullanıldığı herşeyi tersine veya olumsuzuna çevirir.
// Hemen bir örnek yapalım ;
let karsilastir3 = (sayi1 < sayi2) && !(sayi3 > sayi4)
console.log(karsilastir3)
// Yukarıdaki işlem normalde bize false dönmeliydi çünkü ;
// ve mantıksal operatörünü kullanıyoruz. True olması için ikisininde true olması gerekir.
// ama bizim ikinci karşılaştırmamızın sonucu false çıkıyordu normalde
// biz o karşılaştırmanın önüne ! operatörü koyduk ve onu şu hale çevirdik ;
// (sayi3 < sayi4) yani tam tersini almasını sağladık.
// bu sayede her iki değerde true oldu ve bize true değerini dönderdi.

// Dates - Tarih İşlemleri

let tarih = new Date()

/*Yukarıdaki işlemde Date objesinin referansını yeni bir değişkene aktarıyoruz.
Yani artık tarih değişkenimizi bir Date objesi olarak düşünebiliriz.
Bundan dolayı obje içerisindeki metodlar(fonksiyonlar)a erişebiliyoruz.*/

/* Not : Aslında her değişken tanımladığımızda türü farketmeksizin değişken türü classından
bir referans almış oluyoruz. */

// Şimdi özelliklere geçelim ;

tarih.getTime() // Şuanki saati ms cinsinden bize gösterir.
tarih.getFullYear() // Şuanki yılı bize gösterir.
tarih.getMonth() // Şuanki ayı index numarasına göre int cinsinden kaçıncı ayda olduğumuzu bize gösterir.
tarih.getDate() // Şuanki günün ayın kaçıncı günü olduğunu int olarak bize gösterir.
tarih.getHours() // Şuanki saati bize gösterir.
tarih.getMinutes() // Şuanki dakikayı bize gösterir.
tarih.getSeconds() // Şuanki saniyeyi bize gösterir.
tarih.getMilliseconds() // Şuanki milisaniyeyi bize gösterir.
tarih.getDay() // Haftanın kaçıncı gününde olduğumuzu int olarak bize gösterir. Pazar 0 olarak kabul edilir.

// Not : Set işlemleri yaparken başka bir değişkene atama işlemi yapamıyoruz.

tarih.setFullYear(2025)
console.log(tarih.getFullYear())

// Yukarıdaki işlemde tarih değişkeninin yılını 2025'e eşitledik ve daha sonra görüntülemek için konsol ekranına yazdırdık.

// Not: get yöntemi ile olan herşeyi set ile değiştirip müdahele edebiliriz.

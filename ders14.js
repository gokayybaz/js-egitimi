// Type convertion - Tip Dönüşümü

let a = String(10)
// İçerisine ne girilirse girilsin Stringe çevirir.

// bir diğer stringe çevirme işlemi ;
a.toString()
// yukarıdaki kodda stringe çevirme işlemi yapar.

let b = Number(true)
// İçerisine ne girilirse girilsin Number'a çevirir.

// Değişkenin yapıcı fonksiyonunu görme işlemi

let isimListesi = ["Gökay","Benan","Hakkı","Zeynep"]

console.log(isimListesi.constructor)

// Yapıcı fonksiyonunu görmek bize değişkenin tip kontrolünü yapmamıza olanak tanır. Hemen bir örnek yapalım

function arrayKontrolEt(x) {
    return x.constructor.toString().indexOf("Array") > -1
    // Kodu biraz açıklayayım ;
    // bize gönderilen değeri al,
    // constructor metoduna bak,
    // daha sonra onu stringe çevir,
    // daha sonra indexOf içerisine girilen değerin index numarasını bul,
    // Eğer index numarası -1 den büyükse true dönderir. Eşitse veya küçükse false dönderir.
    // index numarası eğer aradığımız parametre string ifadede yoksa -1 dönecektir.
}
console.log(arrayKontrolEt(isimListesi))


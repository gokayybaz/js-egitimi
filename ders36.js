// BOM Timing (Zamanlama - Set Interval) İşlemi

// Set interval ile başlayalım

// Set interval : içerisine yazılan fonksiyonun belli sürelerde tekrar etmesini sağlar

// window.setInterval() // or

// setInterval(function(){
//     document.write("Javascript öğreniyoruz.")
// },2000)


// Bununla ilgili bir örnek yapalım

// Örnek adı : 2snde bir arkaplan değiştirme

// Adım 4 - Daha sonra sonuc diye fonksiyonun dışında bir değişken tanımladık
let sonuc

// Adım 1 - ilk önce bir değiş fonksiyonu oluşturduk.
function degis() {
    // Adım 2 - Kullanılacak renkleri bir liste içerisine aldık
    let renkler = ["red", "green", "indigo", "blue", "yellow", "purple"]
    // Adım 3 - Math.round ve Math.random ile çalıştıkça rastgele sayı üreten bir kod yazdık.
    // Math.round = yuvarlama işlemidir.
    let random = Math.round(Math.random() * renkler.length)
    // Adım 5 - sonuc değişkeninin değerini renkler arrayinin[random] olan elemanına eşitledik.
    // yani random sayı üretiyor ve bize random sayıya denk gelen index numarasındaki rengi sonuc değişkenine atıyor.
    sonuc = renkler[random]

}

// Adım 6 - Set interval kullandık çünkü belli bir süre aralığında çalışmasını istiyoruz.
let backgroundChanger = setInterval(function () {
    // Adım 7 - Belli bir süre aralığında tekrar tekrar çalıştığı için değiştirme fonksiyonunu çağırıyoruz.
    // Böylece bize her 2sn'yede bir farklı renk dönecek.
    degis()
    // Adım 8 - her 2 sn'de bir dönen farklı rengi dökümanın arkaplan rengine eşitledik.
    document.body.style.backgroundColor = sonuc
}, 2000)

// İçerisine girilen interval'ı temizler devre dışı bırakır.
clearInterval(backgroundChanger)

// Bir diğer zamanlama fonksiyonumuz setTimeot ;

// Bu fonskiyonun yazılışı aynı setInterval gibidir fakat farkı bu 2snde bir çalışmaz da
// ilk açılışta 2sn bekler sonra bir defa çalışır.
// Yani çalışması için bir zaman aşımı oluşturuyoruz.

// Aynı şekilde clearTimedOut() ile devre dışı bırakabiliyoruz.


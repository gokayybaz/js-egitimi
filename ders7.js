// String Metodları

// İlk önce bir string tanımlayalım ;

let deneme = "Merhaba ben js öğreniyorum. ben"

// String ifadenin karakter uzunluğunu bulma
let denemeUzunluk = deneme.length
console.log(denemeUzunluk)

// Gönderdiğimiz değerin string ifade içerisindeki (birden fazla varsa ilk değerin) indexini bulma
let denemeBenIndex = deneme.indexOf("ben")
console.log(denemeBenIndex)

// Gönderdiğimiz değerin string ifade içerisindeki (birden fazla varsa en son tanımlanmış olan) değerin indexini bulma
let denemeBenEnSonIndex = deneme.lastIndexOf("ben")
console.log(denemeBenEnSonIndex)

// .indexOf ile aynı şekilde ve mantıkta çalışan bir diğer alternatif
let denemeBenIndexSearch = deneme.search("ben")
console.log(denemeBenIndexSearch)

// Gönderdiğimiz index değerinden öncesini kesip atma işlemi
let denemeMerhabaKes = deneme.slice(8)
console.log(denemeMerhabaKes)

// Gönderdiğimiz index değerlerinin aralığı dışındakileri kesip atma işlemi
let denemeMerhabaAndSonBenKes = deneme.slice(8,27)
console.log(denemeMerhabaAndSonBenKes)

// Not : slice metodunu negatif olarak da kullanabiliriz. Fakat index sayma işlemini baştan değil sondan geriye doğru yaparız.

// Slice metodu alternatifi ama negatif değer kabul etmeyeni
let denemeMerhabaAndSonBenKesAlternatif = deneme.substring(8,27)
console.log(denemeMerhabaAndSonBenKesAlternatif)

// Slice metodu alternatifi ama aralıklı kesme işlemi yapamaz onun yerine kesme işleminden sonra kaç karakter görmek istiyorsak onu yazarız.
let denemeMerhabaKesAlternatif = deneme.substr(8,2)
console.log(denemeMerhabaKesAlternatif)

// String ifade içerisinde kelime veya harf değiştirme işlemi
let denemeMerhabaDegistir = deneme.replace("Merhaba", "Hello !")
console.log(denemeMerhabaDegistir)

// Not : Replace işleminde değiştirilecek değeri ararken harf duyarlılığı vardır. Onu kaldırmak için ;
let denemeMerhabaDegistir2 = deneme.replace(/MeRhAbA/i, "Hi !")
console.log(denemeMerhabaDegistir2)
// Yukarıdaki işlemle harf duyarlılığını kaldırmış bulunmaktayız.

// Not : Birden fazla değiştirilecek değer varsa aşağıdaki işlemi yaparız.
let denemeBenleriDegistir = deneme.replace(/ben/g, "ama")
console.log(denemeBenleriDegistir)

// String ifadenin tüm harflerini büyük yapma işlemi
let buyukDeneme = deneme.toUpperCase()
console.log(buyukDeneme)

// String ifadenin tüm harflerini küçük yapma işlemi
let kucukDeneme = deneme.toLowerCase()
console.log(kucukDeneme)

// İki string ifadeyi metodla birleştirme işlemi
let ifade1 = "Merhaba ben"
let ifade2 = "Gökay Baz"

let birlestir = ifade1.concat(" ", ifade2)
console.log(birlestir)

// String ifadenin başındaki ve sonundaki boşlukları silme işlemi
let bosluklu = "      deneme        "
console.log("Boşluklu uzunluk : "+bosluklu.length)
let boslukSil = bosluklu.trim()
console.log("Boşluk Silindikten sonraki uzunluk : "+boslukSil.length)

// İçerisine girilen index numarasına göre string ifadedeki karakteri bulma işlemi
let deneme24Karakteri = deneme.charAt(24)
console.log("24. Karakter : "+deneme24Karakteri)

// İçerisine girilen index numarasına göre dönen karakterin UTF kodunu bulma işlemi
let deneme45KarakteriUTFKodu = deneme.charCodeAt(25)
console.log("45. Karakter UTF Kodu : "+deneme45KarakteriUTFKodu)

// İçerisinde herhangi bir ayraçla ayrılmış ifadeler barındıran stringi arraye çevirme işlemi
let ayracli1 = "lahana,maydonoz,marul,havuç"
let arrayAyracli1 = ayracli1.split(",")
console.log(arrayAyracli1)
let ayracli2 = "elma-armut-muz-kavun"
let arrayAyracli2 = ayracli2.split("-")
console.log(arrayAyracli2)
// Ayraç türü farketmez.
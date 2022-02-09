
// Ders 1 Çıktı alma işlemleri Tekrarı

// Konsola yazı yazdırma
// console.log("Hello World !")

// Dökümana yazı yazdırma
// document.write("Hello Javascript !")

// Tarayıcıda bildirim şeklinde yazı yazdırma
// alert("Hello Gökay Baz !")

// Sayfayı komple yazdırma işlemi
// print()

// Basit bir HTML elemanına javascript kullanarak müdahele işlemi ;
// let div = document.getElementById("div")
// div.innerHTML = "<h1><i>Hello World !</i></h1>"
// Yukarıdaki işlemde biçimlendirme etiketleri de işe yaramaktadır. Onlar olmadan bir müdahele işlemi yapmak istersek aşağıdaki adımı izlememiz gerekir ;
// let div = document.getElementById("div")
// div.innerText = "<h1>Hello</h1>"
// İkinci işlemde etiketler çalışmadan olduğu gibi yazdıracaktır.

// Ders 1 Tekrar Tamamlandı

// Ders 2 Yorum Satırları Tekrarı

// tek satır yorum almak için kullanılır.

/*
   çoklu
   yorum
   satırı
*/

// Ders 2 Tekrar Tamamlandı

// Ders 3 Değişkenler Tekrar

// Değişken türleri 5 tanedir. Bunlar ;

// string = "Metinsel ifadeler için kullanılır."
// number = sayısal ifadeler için kullanılır.
// object = nesne oluşturmaya yarar. Nesneye özellikler eklemek için kullanılır.
// array = liste oluşturmak için kullanılır.
// boolean = mantıksal değerler için kullanılır : true or false

// Bir değişken oluşturarak işleme başlayalım ;

// let name = "Gökay"

// değişken oluşturma sıralaması şöyledir ;
// keyword variableName = variableValue
// anahtarkelime (let yada var) degiskenIsmi = degiskenDegeri
// = : atama operatörüdür. Eşitliğin sol tarafındaki değişkene sağ tarafındaki değeri atar.

// Not : Değişken tanımlarken değişken isminde "camelCase" yazım kuralını kullanırız.
// Bu kuralda ilk kelimenin ilk harfi küçük, ikinci kelimenin ilk harfi büyük olur.
// Ve kelime birleşik yazılır.

// Değişken tanımlarken var veya let anahtar kelimelerini kullanabiliriz. Fakat biz let keywordünü kullanmayı tercih ediyoruz.
// Bunun sebebi tamamen bellek yönetiminin let anahtar kelimesini kullanınca daha iyi olmasıdır.
// Biraz daha detaya inmek gerekirse ;
/*
   let ile değişken tanımladığımız zaman sadece o kod bloğunda erişebiliriz. Fakat
   var ile değişken tanımladığımız zaman kodun heryerinde erişebiliriz.
   Bu da bize let ile değişken tanımladığımız zaman daha iyi bir bellek yönetimi ve bellek kullanımı olacağını göstermektedir.
*/

// undefined (tanımsız) ne demektir ?
// bir değişken oluşturup değer atamadığımız zaman o değişkeni kullanmaya çalışınca bu hatayı dönecektir.

// Javascript string ifade oluşturma yöntemleri
// "çift tırnak içerisine"
// 'tek tırnak içerisine'
// `backtick içerisine` - Template Literals konusu

// Yukarıda belirttiğimiz değişken türleri ile birer tane değişken oluşturalım ;
// let degisken1 = "Merhaba !"
// console.log(degisken1)
// let degisken2 = 25
// console.log(degisken2)
// let degisken3 = ["Elma", "Armut", "Lahana", "Patates"]
// console.log(degisken3)
// let degisken4 = {
//     name: "Karpuz",
//     mevsim: "Yaz",
//     tur: "Meyve",
// }
// console.log(degisken4.name)
// let degisken5 = false
// console.log(degisken5)

// Javascriptde sabit (const) tanımlama

// Şimdi gelelim önemli konuya ;
/*
   Biz değişken tanımlarken tanımladıktan sonra o değişkenin değerini istediğimiz yerde değiştirebiliyoruz.
   Adı üstünde değişken olduğu için, Ama öyle bir durum oluyor ki değişkenin değerinin asla tanımladıktan sonra
   değiştirilmemesini istiyor olabiliriz, İşte bu durumda const yani sabit olarak tanımlamız gerekiyor.
   Hemen bir örnek yapalım ;
*/
// const pi = 3.14

// Yukarıda tanımladığımız pi değişkeni sabit olduğu için asla tanımladıktan sonra değerini değiştiremeyiz.

// Javascriptde değişkenin tipini görmek

// Bunun için typeof anahtar kelimesinden yararlanırız.
// Hemen bir örnek yapalım ;
// console.log(typeof pi) // Number dönecektir.

// Ders 3 Tekrar Tamamlandı
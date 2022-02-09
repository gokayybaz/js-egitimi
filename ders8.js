// Array Metodları

// hemen bir array oluşturalım
let meyveler = ["Armut","Şeftali","Kavun","Portakal",]

// Arraylarda belirli indexteki elemana ulaşmak istersek ;
let meyvelerUcuncuElemen = meyveler[3]
// İndex numarasına göre işlem yaptığımız için 0 dan başlar. Ve aslında 4. elemanı seçmiş oluruz.
console.log(meyvelerUcuncuElemen)

// Array içerisinden bir eleman alıp string değişkene atamak istersek ;
let enSevdigimMeyve = meyveler[2]
// Böyle bir durumda meyvelerin 2.indexindeki eleman enSevdigimMeyve adlı elemana değer olarak atandı,
// Atanan değer string olduğu için değişkenimiz string bir değişken haline geldi.

// Array uzunluğumuzu görmek istersek ;
let meyvelerUzunluk = meyveler.length
// length ingilizce karşılığıda uzunluk demektir.
console.log(meyvelerUzunluk)

// Arrayin ilk ve son elemanını görmek istersek ;
let meyvelerIlkEleman = meyveler[0]
// İlk index numaralı elemanı seçersek arrayin ilk elemanını bulmuş oluruz.
console.log(meyvelerIlkEleman)
let meyvelerSonEleman = meyveler[meyveler.length - 1]
/* length metodu bize uzunluğu döndüğü için son elemana ulaşmak için uzunluğu 1 eksiltmeliyiz.
   Bunun sebebi dizenin uzunluğunu verirken index numarasını baz almaz, Ama sıralamayı index
   numarasına göre yaptığımız için index de sıfırdan başladığı için uzunluğu 1 eksilterek son elemana ulaşabiliriz */
console.log(meyvelerSonEleman)

// Arraya eleman ekleme işlemleri
meyveler.push("Karpuz","Çilek")
// push metodu ile arraya istediğimiz kadar eleman ekleyebiliriz.
console.log(meyveler)
// tekrardan yazdırma işlemi yaptığımda eklendiğini görmekteyiz.
meyveler.unshift("Nar","Erik")
// unshift metodu ile arrayin başına istediğimiz kadar eleman ekleyebiliriz.
console.log(meyveler)

// Arraydan eleman silme işlemleri
meyveler.pop()
/* pop metodu ile arrayin son elemanını silebiliriz.
   pop metodu silme işlemini şu şekilde yapıyor ; 
   listeye gidiyor son elemanı ordan silip pop metodunu çağırdığımız değişkene veya kendisine atıyor.
   Bu durumda meyveler.pop()'u konsola yazdırdığımızda arrayin son silinen elemanını görebiliriz.*/
console.log(meyveler)
meyveler.shift()
/* unshift metoduna benzer fakat bu ilk eleman siler o eklerdi. */
console.log(meyveler)
// Bir diğer arraydan eleman silme metodumuz string metodlarından hatırladığımız slice() metodudur.
// Hemen bir örnek yapalım ;
let ilkMeyveSil = meyveler.slice(2)
console.log(ilkMeyveSil)
// içerisine girdiğimiz sayı kadar baştan siler ve kalanları bize gösterir.
let ilkMeyveVeSonMeyveSil = meyveler.slice(1,5)
console.log(ilkMeyveVeSonMeyveSil)
// gördüğümüz gibi ilk meyveyi ve son meyveyi sildik, kalanları konsol ekranına bastırdık.
// Not : slice metodudun ilk değeri 1 den başlıyor ama ikinci değeri index değerine göre silme işlemi yapıyor.

// Arrayda eleman index numarasına göre gidip oraya eleman silmeden veya silerek değer yerleştirme yapmak istersek ;
meyveler.splice(2,1,"Kivi")
console.log(meyveler)
// Şeftaliyi silip yerine Kivi getirdi.
// birinci parametre : gidilecek index numarası
// ikinci parametre : gidildiği yerden sonra kaç eleman silineceği
// not : ikinci parametre 0 olursa orda önceden varolan elemanı sonradan metodla gönderilen eleman veya elemanların sonuna atacaktır.
// üçünü parametre : gönderilecek değer veya değerler

// Not : splice metoduna değer göndermeden silme işlemide yaptırabiliriz. Örnek olarak ;
meyveler.splice(0,1)
// 0'ıncı indexte bulunan elemanı siler
console.log(meyveler)

// İki array değerlerini birleştirme
let users1 = ["Benan","Hakkı","Gökay","Zeynep"]
let users2 = ["Gökbörü","Cengiz","Mustafa","Gökay"]
let ikiArrayiBirlestir = users1.concat(users2)
console.log(ikiArrayiBirlestir)
// yukarıda ikiArrayiBirlestir değişkeni her iki arrayin değerlerini tutan yeni bir array oluyor.

// Genel Not : Çoğu string metodları arraylar üzerinde de çalışmaktadır.
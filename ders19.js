// For Döngüsü

/*
   Gelelim programlamadaki en önemli konulardan birine : Döngüler.
   Kısaca Nedir Bu Döngüler ? ;
   Döngüler bizim bir işi tekrarlı bir şekilde yapmamızı sağlarlar.
   Örneğin ekrana alt alta istediğimiz kadar birşeyler yazdırmak veya
   Bir listenin elemanlarını ekrana alt alta yazdırmak.
   İşte bu gibi durumlarda Döngüleri kullanırız.
   for döngüsü ile döngülere giriş yapalım ;
*/

// Hemen terimleri açıklayayım ;
/*
   let i = 1 :> Başlangıç değişkeni ve değeri,
   (Başlangıç değişkeni 'i'dir. değeri ise 1'dir.)
   i<= 10 :> Döngünün ne kadar çalışacağı koşulu
   (Başlangıç değeri 10'dan küçük ve eşit olduğu sürece bu kodu çalıştır.)
   i++ :> Başlangıç değerini arttırma kodu veya operatörü.
   (Çalıştıkça başlangıç değerini tek tek arttır.)
*/

// Çalışma mantığına bakalım ; 
/*
   İlk önce bir defa yazdırıyor,
   Daha sonra çalıştıkça başlangıç değerini arttırdığımız için geri başa dönüyor ve tekrar çalışıyor.
   Böyle böyle devam kuralına uyarak çalışacağı kadar çalışıyor ve duruyor.
*/

// Döngüdeki başlangıç değerini kod içerisinde kullanma ;
/*
   Döngüdeki başlangıç değeri sürekli arttığı için onu kod içerisinde kullanabiliriz.
   Böylelikle sayı saydırabiliriz.
   Veya bir arrayin içerisinindeki elemanları tek tek gezdirebiliriz.
   Döngünün asıl amacı budur zaten başlangıç değerini arttırır. Biz bu değeri kullanarak tekrar eden işlemlerimizi yaptırırız.
*/
for (let i = 1; i <= 10; i++) {
    //console.log("Şuan "+i+". Sıradasınız.")
}

// Döngüdeki başlangıç değeri ve arttırma değeri değişebilir.
// Aşağıda bununla ilgili bir örnek görüyoruz ;
/*
   Başlangıç değeri 8,
   Ne kadar çalışacağı koşulu başlangıç değeri 55'ten küçük veya eşit olana kadar,
   Döngü çalıştıkça başlangıç değerini arttırma değeri ise 5, 5 arttırarak döngüyü devam ettirir.
*/
for (let i = 8; i <= 55; i = i + 5) {
    //console.log(i)
}

/* innerHTML ve for döngüsünü kullanarak arraydeki elemanları alt alta yazdırma işlemi */

// Array tanımlama
let userList = [
    "Benan",
    "Hakkı",
    "Zeynep",
    "Gökay"
]

// Liste yazdırma fonksiyonu
/*
  Böylelikle istediğimiz listeyi yazdırabilriz.
  Dinamik bir yapı oluşturmuş oluyoruz.
*/

// Parametre olarak liste istedik. (Liste yazdıracağı için)
function listYazdir(list) {
    // Ekrana yazılacak değişkeni ilk önce içi boş bir şekilde tanımladık.
    let yazi = ""
    // Daha sonra for döngüsü oluşturduk
    // Başlangıç değerini 0 yaptık. (arraylerde index değeri 0'dan başladığı için)
    // Ne kadar çalışacağını belirttik. (gelen listenin uzunluğundan küçük olduğu sürece çalışacak)
    // döngü çalıştıkça başlangıç değerini arttırma değerini tek tek olarak ayarladık.
    for (let i = 0; i < list.length; i++) {
        // Daha sonra içi boş olarak oluşturduğumuz değişkenin içerisine değer atadık.
        // list[i] : gelen listenin i. elemanı demek oluyor.
        // (Yukarıda görmüştük for döngüsü içerisinde bulunan kodlarda başlangıç değerini kullanabiliriz diye.)
        yazi += list[i] + "<br>"
        // Not : burada atama yaparken = yerine += kullanmamızın sebebi şudur;
        /*
          += yerine = kullansaydık döngü döndükçe yazi değişkenini list[i] elemanına eşitleyecekti.
          Bu durumda elimizde bir tane eleman olacaktı.
          ( 
              Çünkü ilk önce listenin 0. elemanına eşitleyecek, 
              sonra döngü tekrar başa saracak 
              ve bir sonraki elemana eşitleyecek yani herhangi bir ekleme işlemi yapmadan
              üst üste eşitleme yapacak bu durumda tek bir eleman oluyor elimizde.
          )
          += Kullanınca önce + ile string ifadeyi topluyor ve daha sonra = ile değere eşitliyor.
          Böylece sonda br etiketi kullandığımız için alt alta bir yazım yapmış oluyor.
          Tamamen string toplama işlemi var kafamız karışmasın toplama işaretini görünce.
        */
    }
    // Daha sonra ekrana yazılacak yazıyı return ile döndük.
    return yazi
}
// İçerisine ekleme yapacağımız HTML elemanını seçtik.
let userListArea = document.getElementById("userList")
// Son olarak innerHTML ile içerisine ekleme yaptık.
//userListArea.innerHTML = listYazdir(userList)
// Sonuç olarak kullanıcıların alt alta ekrana yazıldığını gördük.


// Gelelim iç içe for döngüsü kullanımına 

// For döngüsü iç içe kullanılabilir.
// Örneğe geçmeden önce şunu söyleyeyim ;
/*
   dıştaki for döngüsü ilk defa çalışır, içteki for döngüsü tamamlanmadan dıştaki döngü tekrar çalışmaz.
*/
// Bu ayrıntıyı öğrendiğimize göre işlemlere başlayalım ;

// Örneğimiz 1 den 10'a kadar çarpım tablosunu ekrana yazdırmak

// İlk önce herzamanki gibi ekrana yazılacak değişkeni ilk önce boş olacak şekilde tanımlıyoruz.
let yazi2 = ""

// ilk önce dışta bulunan döngümüzü oluşturuyoruz.
// başlangıç değerini 1 yaptık.
// çalışma koşulunu 10'dan küçük ve eşit olana kadar diye belirttik.
// daha sonra döngü çalıştıkça başlangıç değerini arttırma işlemini tek tek olarak ayarladık.
for (let i = 1; i <= 10; i++) {
    // gelelim iç taraftaki döngü yapımıza ;
    /*
      Burada farklı bir başlangıç değerini tanımladık.
      daha sonra çalışma koşulunu yine 10'dan küçük ve eşit olana kadar diye belirttik.
      daha sonra çalıştıkça başlangıç değerini arttırma değerini tek tek olarak ayarladık
    */
    for (let j = 0; j <= 10; j++) {
        /*
           Gelelim ekrana yazdırma işleminin koduna
           Ekrana yazdırılacak değerin formatı şu şekilde olacak : dış döngüdeki başlangıç değeri * iç döngüdeki başlangıç değeri = (dış döngüdeki başlangıç değeri * iç döngüdeki başlangıç değeri)
           (1*2, 1*1 vb...)
        */
        yazi2 += i + " * " + j + " = " + (i * j) + "<br>"
    }
    // Daha sonra iç döngü bitince bu çalışacak ve tekrar döngü başa dönecek.
    // bu bir ayraç görevi görüyor. Ve alt satıra geçiriyor. (Tamamen görsel amaçlıdır.)
    yazi2 += "-----------------------------<br>"
}

/* 
  Şimdi sonuç olarak birler basamağından onlar basamağına kadar çarpım tablosunu oluşturduk.
  birler basamağından onlar basamağına kadar bütün aşamalar 1'den 10'a kadar çarpılıyor.
  Böylece ilkokul seviyesinde bir çarpım tablosu oluşturmuş olduk.
*/

// Oluşturduğumuz çarpım tablosunu HTML elemanını seçerek içerisine yazdırdık ve ekranda başarılı bir şekilde gördük.
document.getElementById("carpim-tablosu").innerHTML = yazi2
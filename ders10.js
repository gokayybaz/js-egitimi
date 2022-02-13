// Dizi iletarasyonları (Dizi metodları devamı),

// Hemen bir dizi oluşturalım; 

let sayilar = [18,25,36,74,15,25,36]

// Şimdi gelelim metodlara;

// Foreach metodu

/*
   Dizideki elemanları tek tek gezer,
   elemanlarla ilgili işlem yapmamıza yarar.
   (for döngüsünde daha detaylı göreceğiz.)
*/

// Hemen işlem yapacak fonksiyonu yazalım (callback array fonksiyon diye geçer)

let ekranaYazdiralacak = ""

// callback fonksiyon
function elemanlariDonVeIslemYap(value, index, array){    
    return ekranaYazdiralacak = ekranaYazdiralacak + value
}

// for each ile elemanları dönüyoruz.
let yazdir = sayilar.forEach(elemanlariDonVeIslemYap)

// Daha sonra döndüğümüz elemanları konsola yazdırıyoruz.
console.log(ekranaYazdiralacak)

// Map metodu

/*
  Dizideki elemanları tek tek gezerek üzerinde işlem yapıp,
  Yeni bir arraye aktarmak için map metodunu kullanırız.
*/

// Hemen ilgili callback fonksiyonumuzu yazıyoruz
function ucİleCarp(value, index, array){
    return value * 3
}

let ucİleCarpilmisArray = sayilar.map(ucİleCarp)

console.log(ucİleCarpilmisArray)

// Filter Metodu

/*
  Adı üzerinde filtreleme yapmak için kullanılır.
*/

function filtrele(value, index, array) {
    return value > 18
}

let filtrelenmisArray = sayilar.filter(filtrele)

/*
   Yukarıda arrayimizdeki 18'den büyük değerleri filtreleyerek yeni filtrelenmisArray içerisine yeni bir array oluşturmasını sağladık.
*/
console.log(filtrelenmisArray)

// ve oluşturduğumuz arrayi consola yazdırdık. Sonuç olarak 18'i konsolda göremiyoruz.

// Reduce metodu

/*
   Yine arraydaki elemanları tek tek gezer,
   CallBack Fonksiyonda ne işlem yaptırdıysak onu yapar ve bize tek bir değer dönderir. 
   (Örneğin toplama gibi : arraydaki elemanları toplayarak bize tek bir değer dönderir.)
*/

function sayilariTopla(total, value, index, array){
    return total+value
}

let sayilarinToplami = sayilar.reduce(sayilariTopla)
console.log(sayilarinToplami)

// Yukarıda başlangıç toplam değeri 0 oluyor ve elemanları gezdikçe o elemanları topluyor.
// Ama biz başlangıç değerini değiştirmek isteyebiliriz. Hemen onu yapalım ;
// sayilar.reduce(sayilarTopla, 100) yaptığımız zaman 100 totalin başlangıç değeri olacak ve gezdiği sayıları bunun üzerine toplayacak
// Yani sonuç : 329 olacaktır.

// Not: Reduce ile ReduceRight metodu aynı işi yapmaktadır.

// Every Metodu

/*
   Şöyle bir olay kuralım bir sayı dizimiz olsun,
   biz callback Fonksiyon kullanarak o dizide 45 den küçük bir tane bile sayı varsa bize false dönmesini isteyelim
   işte every metodu o işe yarıyor kontole uymayan bir tane bile değer varsa false dönderiyor.
   Hemen bir örnek yapalım ;
*/

function kontrolEt(value, index, array){
    return value < 45
}

let sonuc = sayilar.every(kontrolEt)
console.log(sonuc) // 45' den büyük 1 tane bile sayı olduğu için false döndü


// Some metodu
/*
  Çalışma mantığı tamamen every ile aynı fakat aralarında bir fark var ;
  Eğer kontrole uyan bir tane bile sayı varsa bize true dönecektir,
  Ama hiç yoksa false dönecektir. Aralarındaki fark budur.
*/

// Find metodu

/*
   Bulma işleminde kullanılır. Yine callback fonksiyon içerisinde kontrol yapar.
   array içerisinde kontrole uyan ilk değeri bize döndürür. (Örnek 3ten büyük sayı: 4 varsa 4 dönecektir.)
*/

function kont(value, index, array){
    return value > 3 // 3'ten büyük değer
}

let ucDenBuyukIlkSayi = sayilar.find(kont)
console.log(ucDenBuyukIlkSayi)

// FindIndex metodu

/*
   Yine bulma işleminde kullanılır. Fakat find'de olduğu gibi kontrole uyan ilk sayıyı değil o sayının index numarasını bize döner.
*/

function findIndexBul(value, index,array){
    return value > 15
}

console.log(sayilar.findIndex(findIndexBul))

// indexOf metodu

/*
   Metoda girilen değerin arrayda kaçıncı indexte bulunduğunu gösterir.
*/

// lastIndexof metodu
/*
   Metoda girilen değerin arrayda birden fazla varsa en sondakinin kaçıncı indexte bulunduğunu gösterir.
*/

// indexOf ve lastIndexOf metodlarında değer eğer arrayde bulunamazsa bize -1 değerini dönecektir.

console.log(sayilar.indexOf(74))

console.log(sayilar.lastIndexOf(25))
// DOM Element & Node İşlemleri

// Adım 1 - Javascript kullanarak bir tane HTML elementi oluşturalım;

let elementOne = document.createElement("p")
// Yukarıda HTML dökümanı içerisine bir tane paragraph etiketi oluşturduk.

// Adım 2 - Oluşturduğumuz elementin içerisine yazılacak metni oluşturalım;

let elementOneText = document.createTextNode("Hello World !")
// Yukarıda oluşturduğumuz elementin içerisine yazılacak metni oluşturduk.

// Adım 3 - Şimdi oluşturduğumuz metni, oluşturduğumuz elementin içerisine ekleyelim;
elementOne.appendChild(elementOneText)
// Yukarıdaki işlem en sona ekleme işlemi yapar. (Birden fazla etiket varsa)

// Adım 4 - İstediğimiz etiketden veya elementden öncesine ekleme işlemi

let main = document.getElementById("div1")
let paragraph3 = document.getElementById("p3")
main.insertBefore(elementOne,paragraph3)

// Yukarıdaki işlem elementOne olan yeni oluşturduğumuz elementi html elementleri içerisindeki paragraf 3
// ün öncesine ekleme yapıyor.

// Adım 5 - Element kaldırma(silme işlemi)
main.removeChild(paragraph3)
// Yukarıdaki işlem ile main div'i içerisindeki paragraph3'ü kaldıracaktır.

// Adım 6 - Div içerisindeki element'i değiştirme işlemi
main.replaceChild(elementOne,paragraph3)
// Yukarıdaki işlem paragraph3'ü elementOne ile değiştirecektir.

// Adım 7 - Elementin Attribute'larını (özelliklerini) değiştirme işlemi
main.setAttribute("id", "div4")
// Yukarıdaki işlemde elementin id'sini div4 ile değiştirdik.

// Adım 8 - Elemente yeni Attribute (özellik) kazandırma işlemi;

// ilk önce attributemizi tanımlıyoruz;
let yeniClass = document.createAttribute("class")

// daha sonra attributemize bir değer veriyoruz;
yeniClass.value = "main--container"

// daha sonra bu oluşturduğumuz attribute'yi element içerisine ekleyerek işlemi tamamlıyoruz;
main.setAttributeNode(yeniClass)
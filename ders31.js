// Dom Collection 

// Buradaki amacımız birden fazla html etiketlerine ulaşarak style vermek.

// Hemen bir örnek yapalım;

// Adım 1 - ilk önce bütün p etiketlerini bir değişken içerisine topladık.
let paragraphs = document.getElementsByTagName("p")
// Yukarıdaki değişken artık bütün p lerin bulunduğu bir arrayi referans ediyor.

// Şimdi array olduğu için bütün elemanlara style etiketi uygulamak istediğimiz için bir for döngüsüne girdirmemiz gerekiyor;

for(let i =0; i<paragraphs.length; i++){
    paragraphs[i].style.color = "green"
}

// Yukarıdaki kod ile bütün paragraphların yazı rengini yeşil yaptık.

// Dom Events (Dom Olaylar)

// Adım 1 = html elementine attribute olarak eklemek
// Adım 1 Örnek ;

/*
   <p class="paragraph" id="p1" onclick="alert("Hello World !")"></p>
   // Şeklinde html elementi içerisinde event tanımlayıp çalışacağı kodu yazabiliriz.

   Bir diğer yönteme gelelim ;
   <button class="main--button" id="btn-main" onclick="helloDe()"></button>
   // JS Tarafı ;
   function helloDe() {
       alert("Hello !")
   }
   // Şeklinde html etiketi içerisinde event tanımlayıp çalıştıracağı kodu js kodlarında fonksiyon şeklinde tanımlayabiliriz.

   HTML Elementine attribute ekleyerek event(olay) tanımlamak bu kadar basitti.
*/

// Adım 2 = addEventListener kullanarak event(olay) eklemek
// addEventListener'ın anlamı = Olay Dinleyicisi Ekle demektir.
// Hemen Adım 2 ile ilgili bir örnek yapalım;

// Html Tarafı
/*
   <button id="btn1">Verileri Gönder</button>
*/

// Javascript Tarafı
/*
   let sendDatasButton = document.getElementById("btn1")

   sendDatasButton.addEventListener("click", function(){
       console.log("Veriler Başarılı Bir Şekilde Gönderildi !")
   })
   // Yukarıdaki işlem ile event dinleyip gerçekleşince fonksiyonu çalıştırabiliyoruz.
   // addEventListener'ın çalışma mantığı ;
   // ilk parametrede dinlemek istediğimiz event(olay)'ı giriyoruz.
   // ikinci parametrede ise olay gerçekleştiği zaman yapılacak işlemi fonksiyon şeklinde yazıyoruz.
*/

// Daha Fazla DOM Eventlerine göz atmak için ;
// https://www.w3schools.com/jsref/dom_obj_event.asp
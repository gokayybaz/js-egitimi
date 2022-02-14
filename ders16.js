// İf Else - Karşılaştırma İşlemi

// if : Eğer,
// else : Değil ise demektir.

/*
   Bir şablon oluşturalım ;

   if(kosul){
      console.log("Koşula uyuyorsa bu kod çalışır.")
   }else {
       console.log("Koşula uymuyorsa bu kod çalışır.")
   }

*/

// Hemen bir örnek verelim
let userName = "gokayybaz"
let passWord = "123456"

if(userName=="gokayybaz" && passWord=="123456"){
    // Bu kodun çalışması için hem userName'in hem de passWord'un istenilen koşulu sağlaması lazım
    // Çünkü ve mantıksal operatörünü kullandık.
    console.log("Sisteme Giriş Başarılı ! Yönlendiriliyorsunuz ...>")
    // Koşul sağlandığı için burası çalıştı.
}else {
    console.log("Sisteme Giriş Başarısız ! Lütfen Kullanıcı Giriş Bilgilerinizi Tekrar Gözden Geçiriniz...")
    // Koşul sağlanmasaydı burası çalışacaktı.
}

// Şimdi buraya kadar tek koşullu if else ifadeleri ile çalıştık şimdi birden fazla koşullu if else (else if) ifadelerine geçelim ;

let yas = 19

if(yas < 18){
    console.log("Kullanıcı reşit olmadığı için sisteme giremez !")
}else if(yas>18 && yas<25){
    console.log("Giriş Başarılı ! Genç üyemiz olduğunuz için bizden promosyon kazandınız !")
}else {
    console.log("Giriş Başarılı !")
}

// Birden fazla koşul oluşturmak için else if kullanıyoruz.
// Yani değil ise eğer demektir.
// Bir üstteki koşul sağlanmıyorsa bu koşula bak diyoruz.
// Hiçbir koşul karşılanmazsa else içerisindeki kodlar çalışır.
// Son olarak else if istediğimiz kadar uzatılabilir.

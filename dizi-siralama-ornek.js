
   let arabalar = [
       {
           marka: "Mercedes",
           yili: 2021
       },
       {
           marka: "Renault",
           yili: 1991
       },
       {
           marka: "Wolkswagen",
           yili: 2018
       }
   ]

   function arabalariGoster(divID) {
       document.getElementById(divID).innerHTML = 
       arabalar[0].marka + " " + arabalar[0].yili + "<br>" +
       arabalar[1].marka + " " + arabalar[1].yili + "<br>" +
       arabalar[2].marka + " " + arabalar[2].yili
   }

   // Arabaları yıllarına göre küçükten büyüğe doğru sıralama işlemi
   function arabalariSiralaSonraGoster(divID) {
       arabalar.sort(
           function (araba,araba1){
               // yılına göre sıralama yapacağımız için gelen arabaların yıl özelliğini çıkarmamız gerekiyor.
               return araba.yili - araba1.yili
           }
       )
       // Sıralama işlemi tamam şimdi ekranda görebilmek için tekrardan arabaları gösterme fonksiyonunu çağıralım ;
       arabalariGoster(divID)
   }

   arabalariGoster("arabalar")

   arabalariSiralaSonraGoster("arabalar-siralanmis")
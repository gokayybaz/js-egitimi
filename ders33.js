// BOM Open&Close Window

let button = document.getElementById("btn-open")
function pencereAc(){
    window.open("./index1.html","_blank","width=500,height=500")
    // Burada açılan penceremizin nasıl açılacağına dair belirli özellikler verebiliriz.
}
function pencereKapat(){
    alert("Hello")
 }
 
button.addEventListener("click",pencereAc)
let closeButton = document.getElementById("btn-close")


closeButton.addEventListener("click",pencereKapat)


// Böylece pencereler açıp kapatma işlemleri yapabiliriz.

// window.print() ile sayfamızı yazdırabiliriz.

// Açılan pencereyi taşıma işlemi

// window.moveTo(x,y)
// Burada pencereyi taşıma işlemini gerçekleştiriyoruz. X ve Y koordinatlarını girerek.
// window.focus()
// Burada da taşınılan pencereye focus işlemi gerçekleştiriyoruz.
// window.moveBy da aynı işlemi gerçekleştiriyor.

// Açılan pencereyi sonradan boyutlandırma

// window.resizeTo(400,400)
// ile açılan pencereyi yeniden boyutlandırabiliriz.
// window.resizeBy(400,400)
// de aynı işlemi görüyor fakat bu kod önceki genişlik ve yüksekliğin üzerine ekleyerek yeniden boyutlandırma yapıyor.

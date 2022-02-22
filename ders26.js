// Dom yazı yazma

document.getElementById("div1").innerHTML = "<p>Şeklinde etiket içerisine birşeyler yazabiliriz.</p>"

// Yukarıdaki örnekte div1 idli html etiketine istediğimiz etiketi kullanarak birşeyler yazabildik.


document.getElementById("div2").innerText = "HTML etiketleri kullanmadan içerisine birşeyler yazabiliriz."

// Yukarıdaki örnekte div2 idli html etiketine etiket kullanmadan istediğimizi yazdırabildik.


// Dom etiket içerisindeki değeri alma

let etiketDeger = document.getElementById("div1").innerHTML

// Yukarıdaki kodla etiket içerisindeki değeri alıp farklı bir değişkene atadık.

// Dom eleman kaldırma (silme) işlemi

document.getElementById("div3").remove()

// Yukarıdaki kod seçtiğimiz elemanı silmeye yarar.
// Not : sadece yenilenene kadar geçerli olur. ana koda asla müdahele etmez.


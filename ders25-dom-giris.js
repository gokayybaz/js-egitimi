// JS Dom - Document Object Model

// JS Dom ile html dökümanı üzerinde manipülasyonlar yapabiliriz.
// Örnek olarak bir divi js tarafta seçip ona veri eklemek gibi...

// Detaylı açıklama defterde, Biz Hemen Başlayalım ;

// HTML etiketlerini Dom ile JS üzerinde seçme işlemi
// ____________________________________________________

// 1 - Etiketin ID'sine göre seçme
// document.getElementById("idName")

// Not : Böyle seçimler yaparak HTML etiketleri üzerinde işlemler yapacağız.

// --------------------------------------------------------------------------------

// 2 - Etiketin ClassName'ine göre seçme
// document.getElementsByClassName("className")[0]

// Not : Burada köşeli parantezler içerisine sıfır yazmamızın sebebi HTML tarafında birden fazla
// aynı className'e sahip eleman olabilir. Burada da seçerken getElements diyoruz.
// İşte bu seçme işlemi girdiğimiz class ismine göre aynı class ismine sahip elemanları bir array(liste) içerisinde topluyor.
// Bizde bu arrayin elemanlarına ulaşmak için index numarasını kullanıyoruz.

// --------------------------------------------------------------------------------

// 3 - Etiketin Tag ismine göre seçme
// document.getElementsByTagName("tag ismi")[0]

// Not : Bu kod etiket ismine göre seçim yapar. getElements diyerek seçtiği için yine bir array döner.

// --------------------------------------------------------------------------------

// 4 - Etiketin varsa Name özelliğine göre seçme
// document.getElementsByName("name değeri")[0]

// Not : Bu kod etiketin name özelliği varsa o özelliğe göre seçme yapar. Yine getElements dediğimiz için bir array döner.

// --------------------------------------------------------------------------------

// 5 - Etiketin herhangi bir özelliği ile seçme
// document.querySelectorAll("herhangi bir özellik")

// Not : Bu kod ile etiketin herhangi bir özelliği ile seçim yapabiliriz. Çoğul seçim yapan attribute'da yine array indexine göre seçim yapmalıyız.
// Örnek : (id, className, tagName, attributes.. özellikleri ile seçim yapılabilir.)

// --------------------------------------------------------------------------------

// 6 - Etiketi seçip herhangi bir özelliğini değiştirme işlemi
// document.getElementById("deneme").id = "deneme-btn"

// Not : Yukarıdaki kod ile etiketi seçiyoruz id numarasına göre ve daha sonra id'sini başka bir id'ye eşitliyoruz.
// Bunu istediğimiz özellikte yapabiliriz.

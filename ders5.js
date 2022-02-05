// Fonksiyonlar

// Basit bir fonksiyon tanımlama 
function merhabaDe() {
    document.writeln("Merhaba !")
}

merhabaDe()

// Fonksiyonlara parametre gönderme ve o parametreler ile işlemler yaparak dinamiklik sağlama
function userMerhaba(userName){
   document.writeln(`Merhaba ${userName} !`)
}

userMerhaba("gokayybaz")

function toplamaYap(sayi1, sayi2){
    document.write(`Sayıların Toplamı : ${sayi1+sayi2}`)
}

toplamaYap(15, 78)

// Fonksiyon parametresine varsayılan değer belirleme

function carp(sayi1, sayi2 = 6){
    alert(sayi1*sayi2)
}

carp(25)

// yukarıdaki gibi iki parametre istediği zaman tek parametre gönderdiğimizde normalde
// hata alacaktık. Ama biz yukarıda ikinci parametreye bir varsayılan değer verdiğimiz için eğer parametreye değer göndermezsek o varsayılan değeri çalıştıracaktır.
// eğer değer gönderirsek gönderdiğimiz değer doğal olarak çalışacaktır.

// Geriye değer dönderen fonksiyonlar

function piSayisiGetir(){
    return 3.14
}

document.write(piSayisiGetir()*5)

// Geriye değer dönderen fonksiyonların güzelliği geriye dönen değer üzerinde istediğimiz işlemleri yapabilmemizdir.

// Not : Fonksiyonlar tanımlandıktan sonra çağrılmalıdır. (Sebebi : JS Dosya bazlı çalışır. Yukarıdan başlayarak kodu tarar ve derler. Eğer tanımlamadan önce o fonksiyonu çağırırsak mutlaka hata alırız.)
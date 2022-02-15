// Switch Case Kullanımı

// Mantığı if else mantığına benzer ama bazı farklılıklar vardır.
// Hemen açıklayalım ;

// Burası değerine veya durumuna göre işlem yaptıracağımız değişkeni tanımladığımız alan.
let gun = new Date().getDay()

// Burada parantez içerisine değerine veya durumuna göre işlem yaptıracağımız değişkeni giriyoruz.
switch (gun) {
    // case den sonra değerine veya durumuna göre işlem yaptıracağımız değişkenin olmasını istediğimiz durumlardan birtanesini giriyoruz.
    case 0:
        // Buraya eğer değişkenin değeri olmasını istediğimiz değeri veya durumu karşılıyorsa yapacağı işlemi yazıyoruz.
        document.write("Bugün günlerden Pazar")
    // break ise değişkenin değeri olmasını istediğimiz durumu veya değeri karşılıyorsa kontrol etmeyi durdurmasını sağlıyoruz.
    break
    case 1:
        document.write("Bugün günlerden Pazartesi")
    break
    case 2:
        document.write("Bugün günlerden Salı")
    break
    case 3:
        document.write("Bugün günlerden Çarşamba")
    break
    case 4:
        document.write("Bugün günlerden Perşembe")
    break
    case 5:
        document.write("Bugün günlerden Cuma")
    break
    case 6:
        document.write("Bugün günlerden Cumartesi")
    break
    // default ise değişkenin değeri tanımladığımız olmasını istediğimiz değeri veya durumu karşılamıyorsa yapacağı işlemi yazıyoruz.
    default:
        // değer veya durumu karşılamıyorsa yapacağı işlem kodu
        document.write("Bilinmiyor.")
}

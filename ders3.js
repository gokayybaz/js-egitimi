// Variables (Değişkenler)

// JS'de toplam 5 adet değişken türümüz vardır. Bunlar;

// string - metinsel ifadeleri tutar.
// number - sayısal ifadeleri tutar.
// object - bir obje tutar içerisinde objeye ait bilgiler barındırır.
// array - bir liste tutar içerisinde her türden değişkenler tutabilir.
// boolean (bool) - mantıksal ifadeler tutar.

// Şimdi öncelikle değişken tanımlamaya bir bakalım;

// Sıralama : keyword variableName = variable

let myName = "Gökay"
console.log(myName)

// Not : Değişken tanımarken variableName'de camelCase yapısını kullanırız.

// Değişken tanımlarken var veya let kullanabiliriz. Ama bellek yönetimi
// konusunda let daha iyi olduğu için genellikle veya her zaman let kullanmalıyız.
// (Detaylı anlatım defterde mevcut.)

// JS'de undefined tanımsız değer nedir ?
// bir değişken tanımladıktan sonra değer vermezsek ve onu kullanırsak undefined hatası alırız.
// örnek ;
let age
console.log(age) // undefined

// JS'de string ifade oluşturmak için 3 yöntemi kullanabiliriz ;
// let string = "çift tırnak içerisine"
// let string1 = 'tek tırnak içerisine'
// let string2 = `backtick içerisine` Template literals

// İsterseniz yukarıdaki veri türleri ile birer tane değişken oluşturalım ;

let id = 10
console.log(id)

let userName = "gokayy"
console.log(userName)

let user = {
    name: "Gökay",
    surName: "Baz",
    age: 18
}
console.log(user.name) // or
console.log(user["name"])

let userList = ["Gökay",'Benan',`Hakkı`,"Zeynep",true,false,18,25.4]
console.log(userList[0])
// Not : JS'de index herzaman sıfırdan başlar.

let isMobileBrowser = true
console.log(isMobileBrowser)

// JS'de sabit (const) tanımlama

// Tanımlandıktan sonra veya değeri asla değişmeyecek değişkenleri sabit olarak tanımlamalıyız.
// Çünkü bu bize aynı let keywordünde olduğu gibi bellek yönetimi konusunda çok yardımcı olacaktır.

// Birkaç tane sabit tanımlayalım ;

const pi = 3.14
console.log(pi)

const tcNo = 12345678901
console.log(tcNo)

// JS'de değişken tipini görmek ;

// Konsolda görelim (istedğimiz yerde görürüz, ama ben göstermek amacıyla konsolu kullanacağım)

console.log(typeof pi) // Number
console.log(typeof tcNo) // Number
console.log(typeof userList) // Object (array ama içerisinde birden fazla tür olduğu için böyle gösteriyor.)
console.log(typeof user) // Object
console.log(typeof isMobileBrowser) // Boolean
console.log(typeof userName) // String
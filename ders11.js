// Obje Metodları

// Hemen bir obje oluşturalım ;

let user = {
    name: "Gökay",
    surName: "Baz",
    age: 18,
    maas: 1200,
}

// user objesindeki istediğimiz özelliği konsola yazdıralım.
console.log(user.maas)
console.log(user["surName"])

// user objesindeki özelliğin değerini farklı değişkene atayalım.
let userName = user.name + " " + user.surName
console.log(userName)

// Objeler içerisine fonksiyonlarda yazabiliriz.
let userManager = {
    name: "Benan",
    addUser: function (){
        // this keywordü ile objenin içerisindeki fonksiyon içerisinden objenin elemanlarına ulaşabiliriz.
        return this.name+" "+"adlı kullanıcı sisteme eklendi !"
    }
}

console.log(userManager.addUser())


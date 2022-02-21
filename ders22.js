// For in ve for of döngüleri

// Hemen bir array oluşturalım

let userList = [
    "Gökay","Benan","Hakkı","Zeynep"
]

// Şimdi bu arrayi for yerine daha kolay olan for in ile dönelim

let user

for(user in userList){
    // console.log(userList[user])
}

// Şimdi ise for in'e benzeyen ama arasında çok küçük bir fark bulunan for of döngüsüne bakalım

for(user of userList){
    // console.log(user)
}

// Gelelim ikisi arasındaki farka ;
/*
   For in döngüsünde user diye tanımladığımız değişken döndüğü arrayin elemanlarının index numarasını alıyordu,
   for of döngüsünde ise user diye tanımladığımız değişken döndüğü arrayin elemanlarını direkt alıyor.
   İkisi arasındaki fark budur.
*/

// For in ve for of döngüsü kullanmamızdaki amaç array üzerinde döngü işlemi yapıyorsak daha kolay ve pratik bir biçimde yapabilmemizdir.

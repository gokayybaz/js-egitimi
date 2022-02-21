// Break ve Continue Keywordleri

for(let i = 0; i<25; i++){
    if(i == 5){
        break
    }
    console.log("Sayı :"+i)
}

// break koşul sağlandığı zaman döngüyü kesmeye yarar.

for(let i = 0; i<20; i++){
    if(i == 7){
        continue
    }
    console.log("Sayi :"+i)
}

// continue ise koşul sağlandığı zaman koşuldaki değeri atlamaya ve ondan sonra devam etmeye yarıyor.
// yukarıdaki örnekde 7 yi dönmedi ve bir sonrakine geçti.


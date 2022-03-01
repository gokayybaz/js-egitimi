// BOM History

// Mantık tamamen şöyle ; 

// Tarayıcıda sol üst tarafta bulunan bir ileriye bir geriye götüren tuşların
// bir benzerini yapıyoruz.

// Hemen başlayalım

let openButton = document.getElementById("btn-open")

openButton.addEventListener("click",function(){
    window.open("./index1.html","_self","width=500,height=500")
})


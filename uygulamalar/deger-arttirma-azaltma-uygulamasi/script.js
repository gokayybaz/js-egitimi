let numberArea = document.getElementsByTagName("input")[0]
let arttirButton = document.getElementById("btn-arttir")
let azaltButton = document.getElementById("btn-azalt")

a = numberArea.value
a = Number(a)

function degeriAzalt(){
    if(a == 0){
        alert("Değer Daha Fazla Azaltılamaz !")
    }else {
        a -= 1
        numberArea.value = a
    }
}

function degerArttir(){
    a += 1
    numberArea.value = a
}

arttirButton.addEventListener("click",degerArttir)
azaltButton.addEventListener("click",degeriAzalt)
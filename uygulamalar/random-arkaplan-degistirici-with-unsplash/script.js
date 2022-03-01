let images = [
    "./photos/1.jpg",
    "./photos/2.jpg",
    "./photos/3.jpg",
    "./photos/4.jpg",
    "./photos/5.jpg",
    "./photos/6.jpg",
]
let mainDiv = document.getElementById("main")

setInterval(function(){
    let randomSayi = Math.round(Math.random() * images.length)
    mainDiv.innerHTML = `<img src="${images[randomSayi]}"></img`
},2000)
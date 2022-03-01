// BOM Screen ile ekranın genişliğini ve yüksekliğini alma işlemi

let screenWidth = window.innerWidth
let screenHeight = window.innerHeight

console.log(screenWidth,screenHeight)

// or

let kullanilabilirWidth = screen.availWidth
let kullanilabilirHeight = screen.availHeight

// screen ve window nesnelerini kullanarak sayfamızın genişlik ve yüksekliğine dair birçok bilgiye ulaşabiliriz.

// Renk ve Pixel derinliğine ulaşma işlemi

screen.pixelDepth
screen.colorDepth
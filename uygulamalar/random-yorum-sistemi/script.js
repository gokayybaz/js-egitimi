let answerList = [
    {
       answer:"Gerçekten çok beğendim.",
       answerer: "Gökay Baz"
    },
    {
        answer:"Beklediğimi karşılamadı.",
        answerer: "Benan Baz"
     },
     {
        answer:"F/P Ürünü beğendim.",
        answerer: "Hakkı Baz"
     },
     {
        answer:"Gerçekten çok kötü.",
        answerer: "Zeynep Baz"
     },
     {
        answer:"Harika çok beğendim.",
        answerer: "Cengiz Kavukluca"
     }
]

let answerContainer = document.getElementById("cont-answer")
let answererContianer = document.getElementById("cont-answerer")

setInterval(function(){
    let randomIndex = Math.round(Math.random()*answerList.length)
    answerContainer.innerHTML = answerList[randomIndex].answer
    answererContianer.innerHTML = answerList[randomIndex].answerer
}, 2000)
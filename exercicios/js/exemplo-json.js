console.log('Testando JS')

//escopos var let const
let videos='{"tipo":"Site de Assinatura","turma":"ImpulsoTec","ano":2022}'

console.log(videos)
let videosJSON= JSON.parse(videos)

console.log(videosJSON)

let conteudo=document.querySelector("#conteudo")
let h3=document.querySelector("#conteudo h3")
let p1=document.querySelector("#p1")
let p2=document.querySelector("#p2")


h3.innerHTML=videosJSON.tipo
p1.innerHTML="Turma: " + videosJSON.turma
p2.innerHTML=videosJSON.ano

let usuario='{"nome":"Adalberto","idade":34,"livros":["Bill Gattes","Terror em Lake City","O Elefante Branco","Capitão de Areia"]}'
let usuarioJSON= JSON.parse(usuario)
console.log(usuarioJSON)
let infoNome=document.querySelector("#infoNome")
infoNome.innerHTML=usuarioJSON.nome + ", " + usuarioJSON.idade + " anos"

let listaLivros=document.querySelector("#listaLivros")
listaLivros.innerHTML='<li>' + usuarioJSON.livros[0] + '</li>' 
listaLivros.innerHTML+='<li>' + usuarioJSON.livros[1] + '</li>' 
listaLivros.innerHTML+='<li>' + usuarioJSON.livros[2] + '</li>'

let livrosFor=document.querySelector("#livrosFor")

for(var i=0;i<usuarioJSON.livros.length;i++){
    console.log(usuarioJSON.livros[i])
    livrosFor.innerHTML+= (i+1) + ': ' + usuarioJSON.livros[i] + '<br />'
}
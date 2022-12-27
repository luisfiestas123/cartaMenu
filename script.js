let foto=document.getElementById('foto')
let title=document.getElementById('title')
let precio=document.getElementById('precio')
let description=document.getElementById('description')

Array.from(document.getElementsByClassName('cards')).forEach((ele, i)=>{
    ele.addEventListener('click', ()=>{
        foto.src = ele.getElementsByTagName('img')[0].src
        title.innerText = ele.getElementsByTagName('h4')[0].innerText
        precio.innerText = ele.getElementsByTagName('label')[0].innerText
    })
})

let ceviche=document.getElementById('ceviche')
let jalea=document.getElementById('jalea')
let parihuela=document.getElementById('parihuela')
let leche=document.getElementById('leche')

//clases

ceviche.addEventListener('click', ()=>{
    document.body.style.backgroundColor="red"
    document.querySelector('.container-carrusel').style.display="none"

})

jalea.addEventListener('click', ()=>{
    document.body.style.backgroundColor="white"
    document.querySelector('.cards').style.display="none"

})

parihuela.addEventListener('click', ()=>{
    document.body.style.backgroundColor="pink"
    document.querySelector('.cards').style.display="none"

})

leche.addEventListener('click', ()=>{
    document.body.style.backgroundColor="green"
    document.querySelector('.cards').style.display="none"

})
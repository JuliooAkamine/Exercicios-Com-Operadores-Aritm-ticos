

const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const nota4 = document.querySelector('#nota4')
const nota5 = document.querySelector('#nota5')
const nota6 = document.querySelector('#nota6')
const formularionota = document.querySelector('#formularionota')


formularionota.addEventListener('submit' , function (event) {

    event.preventDefault()
    
    const notaum = parseFloat(nota1.value.replace(',', '.'))
    const notadois = parseFloat(nota2.value.replace(',', '.'))
    const notatres = parseFloat(nota3.value.replace(',', '.'))
    const notaquatro = parseFloat(nota4.value.replace(',', '.'))
    const notacinco = parseFloat(nota5.value.replace(',', '.'))
    const notaseis = parseFloat(nota6.value.replace(',', '.'))

    const notasomadas = notaum + notadois + notatres + notaquatro + notacinco + notaseis

    const media = (notasomadas / 6).toFixed(2)


    document.getElementById('formularionota').style.display = 'none'

    document.getElementById('notamedia').innerHTML = 'Sua nota média é de '+media+''
    console.log(notaum , notadois , notatres , notaquatro , notacinco , notaseis, media)
})


function clickClose() {
 
    document.getElementById('menuburguer').style.display = 'none' 
    document.getElementById('close').style.display = 'none'
    document.getElementById('menu').style.display = 'block'
    document.getElementById('icones').style.backgroundColor = ''
    
    
    
    }
  
  function clickMenu() {
    document.getElementById('menuburguer').style.display = 'flex' 
    document.getElementById('close').style.display = 'block'
    document.getElementById('menu').style.display = 'none'
    document.getElementById('icones').style.backgroundColor = 'rgb(190, 188, 188)'
    
    
  }
const form = document.querySelector('#form')
const campo = document.querySelector('#pessoas')

const formulario = document.querySelector ('#formulario')
const valortotal = document.querySelector ('#valortotal')

form.addEventListener('submit' , function (event) {

    event.preventDefault()
    const valor = parseFloat(campo.value)
    const valorinteiro = parseFloat(valortotal.value)

    document.getElementById('principal').style.display = 'none'
    document.getElementById('background').style.display = 'none'
    document.getElementById('container-texto').style.display = 'flex'

    document.getElementById('texto').innerHTML = 'o valor para cada cliente fica R$'+(valorinteiro / valor).toFixed(2)+' '

})

formulario.addEventListener('submit' , function (event) {

    event.preventDefault()
    const valorinteiro = parseFloat(valortotal.value)
    const valor = parseFloat(campo.value)
    
    
    document.getElementById('texto').innerHTML = 'Digite quantas pessoas há na mesa para fazer o calculo. '
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
    document.getElementById('icones').style.backgroundColor = 'darkslategray'
    
    
  }



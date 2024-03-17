const form = document.querySelector('#form')
const campo = document.querySelector('#numero')


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






form.addEventListener('submit', function(event){
    event.preventDefault()
  const input = parseFloat(campo.value)
  const sucessor = input+1
  const antecessor = input-1
  
  document.getElementById('backgroundform').style.display = 'none'
  document.getElementById('textcontainer').style.display = 'inline-flex'
  document.getElementById('txt').innerHTML = 'O sucessor de '+input+' é '+sucessor+' '

  document.getElementById('txt2').innerHTML = 'O antecessor de '+input+' é '+antecessor+' '

})


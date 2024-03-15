const form = document.querySelector('#form')
const campo = document.querySelector('#numero')


form.addEventListener('submit', function(event){
    event.preventDefault()
  const input = parseFloat(campo.value)
  const sucessor = input+1
  const antecessor = input-1
  
  document.getElementById('form').style.display = 'none'
  document.getElementById('textcontainer').style.display = 'inline-flex'
  document.getElementById('txt').innerHTML = 'O sucessor de '+input+' é '+sucessor+' '

  document.getElementById('txt2').innerHTML = 'O antecessor de '+input+' é '+antecessor+' '

})


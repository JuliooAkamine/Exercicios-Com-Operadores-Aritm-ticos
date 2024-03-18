const formulario = document.querySelector('#formulario')
const valorproduto = document.querySelector('#valor')

formulario.addEventListener('submit' , function (event) {
    event.preventDefault()

    const valorprodutofinal = valorproduto.value 
    const calculotres = (valorprodutofinal * 0.1 / 3).toFixed(2)

    document.getElementById('formpagamentos').style.display = 'flex'
    document.getElementById('background').style.display = 'none'
    document.getElementById('formulario').style.display = 'none'
    document.getElementById('dinheiro').innerHTML = (' O valor a vista com 10% de desconto é R$'+valorprodutofinal * 0.1+'')
    document.getElementById('parcela').innerHTML = '3 vezes de R$ '+calculotres+''


    console.log(valorprodutofinal)
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
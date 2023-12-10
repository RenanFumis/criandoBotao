const controles = document.querySelector('#controles');

const cssTexto = document.querySelector('.css');

const botao = document.querySelector('.btn');

controles.addEventListener('change', mudancas)

const estilosBotao ={
  element: botao,

  texto(valor){
    this.element.innerText = valor
  },  

  color(valor){
    this.element.style.color = valor;
  },
  backgroundColor(valor){
    this.element.style.backgroundColor = valor
  },
  height(valor){
    this.element.style.height = valor + 'px'
  },
  width(valor){
    this.element.style.width = valor + 'px'
  },
  border(valor){
    this.element.style.border = valor
  },
  padding(valor){
    this.element.style.padding = valor
  },
  borderRadius(valor){
    this.element.style.borderRadius = valor + 'px'
  },
  boxShadow(valor){
    this.element.style.boxShadow = valor
  },

  fontFamily(valor){
    this.element.style.fontFamily = valor
  },
  fontSize(valor){
    this.element.style.fontSize = valor + 'rem'
  },

}



function mudancas(event){
  const nome = event.target.name
  const valor = event.target.value
  estilosBotao[nome](valor)
  
  valoresArmazenados(nome, valor)
  mostrarCodigo()
}


function valoresArmazenados(nome, valor){
  localStorage[nome] = valor
}

function valoresSalvos(){
  const propriedades = Object.keys(localStorage)
  
  propriedades.forEach((propriedades) =>{
    estilosBotao[propriedades](localStorage[propriedades])
    controles.elements[propriedades].value = localStorage[propriedades]
  })
  mostrarCodigo()
}
valoresSalvos()

function mostrarCodigo(){
  cssTexto.innerHTML = '<span>' + botao.style.cssText.split('; ').join('; </span><span>') //Usamos o split para remover o ; e espaço e assim transformar tudo em uma array, depois com o join incluimos o ; + a tag span assim pormitindo estilizar 
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
  resetLocalStorage()
})

function resetLocalStorage(){
  localStorage.clear()
}

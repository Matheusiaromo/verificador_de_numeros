var button = document.getElementById("btn-analisar");
var numeros = document.getElementById("numeros");
var maior = document.getElementById("maior");
var menor = document.getElementById("menor");

function analisaNumeros(){
 
  if (!numeros.value){
    window.alert("Campo obrigatorio")
  } else {
    //string de numeros 
    let maiorValor = 0;
    const lista = numeros.value
    //transforma em array de strings
    const novaLista = lista.split(",")
    //converte string em number
    const listaNumeros = novaLista.map(function(num) {
      return parseInt(num);
    });

    let menorValor = listaNumeros[0];
    listaNumeros.forEach(function(numero) {
      if (numero > maiorValor){
        maiorValor = numero;
      }
    })

    listaNumeros.forEach(function(numero) {
      if (numero < menorValor){
        menorValor = numero;
      }
    })

  maior.innerHTML = maiorValor
  menor.innerHTML = menorValor

 
  }

 
  
}

button.addEventListener("click", analisaNumeros )





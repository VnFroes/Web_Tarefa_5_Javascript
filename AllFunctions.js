function OperacoesMatematicas(){
    var numero1 = 100
    var numero2 = 10
    var soma = numero1 + numero2
    var subtrair = numero1 - numero2
    var dividir = numero1 / numero2
    var multiplicar = numero1 * numero2

    alert('Ex1'+'\n'+'\n'+'Valores: ' + numero1 + ', ' + numero2 + '\n' + '\nSoma (100+10) = ' + soma + '\nSubtração (100-10) = ' + subtrair
        + '\nMultiplicação (100x10) = ' + multiplicar + '\nDivisão (100/10) = ' + dividir);
}

function Numero1a100() {
    let lista = []
    for (let i = 10; i <= 100; i++) {
        lista.push(i)
    }
    
    alert("Ex 2\n \n Loop de 10 a 100: " + '\n' + '\n' + lista)
}

function TabuadaCinco() {
    for (var num = 1; num < 11; num++) {
        document.getElementById('tabuadacinco').innerHTML += num + ' x 5 = \n' + (num * 5) + '<br>' + '\n';
    }
}

function EscolhaTabuada() {
    tbody.innerHTML = ''
    let valorUsuario = document.getElementById('input1').value

    for (let i = 0; i <= 10; i++) {

      let multiplicar = valorUsuario * i

      var tr = document.createElement('tr')
      var td1 = document.createElement('td')
      var td2 = document.createElement('td')
      var td3 = document.createElement('td')
      var td4 = document.createElement('td')

      var txt1 = document.createTextNode(i)
      var txt2 = document.createTextNode('x')
      var txt3 = document.createTextNode(valorUsuario)
      var txt4 = document.createTextNode(multiplicar)

      td1.appendChild(txt1)
      td2.appendChild(txt2)
      td3.appendChild(txt3)
      td4.appendChild(txt4)

      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)

      tbody.appendChild(tr)
    }
  }

function calc(){
    var select = document.getElementById('lista');
	var value = select.options[select.selectedIndex].value;
	console.log(value);
    console.log(typeof(value))
    var numero1 = parseFloat(document.getElementById('number1').value)
    var numero2 = parseFloat(document.getElementById('number2').value)
    var resultado;
    switch (value) {
        case '1':
            resultado = numero1 + numero2
            break;
        case '2':
            resultado = numero1 - numero2
            break;
        case '3':
            resultado = numero1 * numero2
            break;
        case '4':
            resultado = numero1 / numero2
            break;
            
        default:
            break;
    }
    document.getElementById('resultadoCalc').value = resultado
}

    var Numeros = [1,2,3,4,5,6,7,8,9,10]
    var pares = []

    function ParesNumero(numero) {
   if (numero%2 == 0){
    pares.push(numero)
   }
   
}

function botaoPares(){
    Numeros.forEach(ParesNumero)
    document.getElementById('resultadoPar').value = pares
}

function calculadoraCustoCarro(){
    var custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
	var percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value);
	var percImpostos = parseFloat(document.getElementById('percImpostos').value);

    var custoFinal = custoFabrica + (custoFabrica * (percDistribuidor/100)) + (custoFabrica * (percImpostos/100))
    
    document.getElementById('valorfinal').value = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(custoFinal))
    }
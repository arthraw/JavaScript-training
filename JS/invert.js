/* Inverter uma string
Crie uma função que receba uma string como parâmetro e
retorne uma nova string com os caracteres invertidos. Por
exemplo, se a string fornecida for "Hello", a função deve
retornar "olleH".*/


function inverteTexto() {
    let caixaArgumento = prompt('Digite uma frase para ser invertida:')
    return alert(caixaArgumento.split('').reverse().join(''))
}


var naiveReverse = function(string) {
    return string.split('').reverse().join('');
}
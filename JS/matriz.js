/*

Crie uma função que receba uma matriz de números como
parâmetro e retorne o maior elemento presente nesse vetor

*/


function calcula() 
{   
    let caixaTexto = alert('Digite 3 numeros e ache o maior:')

    let caixa1 = prompt('Digite um numeros:')

    let caixa2 = prompt('Digite um numeros:')

    let caixa3 = prompt('Digite um numeros:')


    let matriz = [
        caixa1, 
        caixa2, 
        caixa3
    ];

    let procura = Math.max.apply(null, matriz );

    return procura

}
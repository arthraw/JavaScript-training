function calculaMatriz() 
{   
    let caixaTexto = alert('Digite 3 numeros:')

    let caixa1 = prompt('Digite um numeros:')

    let caixa2 = prompt('Digite um numeros:')

    let caixa3 = prompt('Digite um numeros:')


    let matriz = [
        caixa1, 
        caixa2, 
        caixa3
    ];

    let procuraMaior = Math.max.apply(null, matriz );
    let procuraMenor = Math.min.apply(null, matriz );
    let media = (caixa1 + caixa2 + caixa3)/3
    
    return `O valor mais alto foi ${procuraMaior}, o menor foi ${procuraMenor} e a média aritimética dos números passados foram ${media}.`

}
/*
Calcular fatorial de um número
Crie uma função que receba um número como parâmetro e
retorne o fatorial desse número. O fatorial de um número é o
produto de todos os números inteiros positivos menores ou
iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 =
120.
*/

function factorialNumber(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
}
factorialNumber(5);

/* Exemplo do 5 que retorna 120 */
/* 
Se o aluno tirar nota maior que 7 ele esta aprovado
Se o aluno tirar uma nota entre 5 e 6 esta em recuperacao
Se tirar menor que 4 reprovado
*/

const nota = 4;

if (nota >= 7) {
    console.log(`Voce está aprovado, sua nota foi ${nota}.`);
} else if (nota > 5 && nota < 6) {
    console.log(`Voce está em recuperaçao, sua nota foi ${nota}.`);
} else (nota <= 4) 
    console.log(`Voce está reprovado, sua nota foi ${nota}.`);
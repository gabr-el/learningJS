//Criar uma funçao
//Calcular o IMC
//Peso / (Altura * Altura)

function imc(valorPeso, valorAltura){
    const peso = valorPeso;
    const altura = valorAltura;
    const resultadoImc = peso / (altura * altura);

    console.log(`Seu IMC é ${resultadoImc}`);
}

imc(80, 1.76);
//Criando um objeto e definindo seus atributos
let cars = {
    itemName: 'Fiesta',
    price: 40.000,
    color: 'blue',
    available: true,
}

//Mostrando os atributos do objeto cars em tabela
console.table(cars);

//Alterando a cor do objeto
cars.color = 'red';

//Mostrando a alteraçao em tabela
console.table(cars);
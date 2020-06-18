const nums = [1,2,3,4,5];

//for com proposito
let resultado = nums.map(numero => { return numero * 2 } );

console.log(resultado);

const soma10 = num => num + 10;
const triplo = num => num * 3;
const paraDinheiro = num => `R$${parseFloat(num).toFixed(2).replace('.',',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);


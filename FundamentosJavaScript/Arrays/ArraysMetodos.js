const pilotos = ['Vettel','Alonso','Raikkonen','Massa'];

//remove o ultimo elemento da array
pilotos.pop();

//adiciona um elemento no array na ultima posicao
pilotos.push('Verstappen');

//remove o primeiro elemento da array
pilotos.shift();

//adiciona um elemento na primeira posicao do array
pilotos.unshift('Hamilton');

//indice/excluir quantos/adicionar
pilotos.splice(2,0,"Bottas","Massa");

//retorna novo array com os elementos indicados
const algunsPilotos = pilotos.slice(2,5);

console.log(pilotos,algunsPilotos);
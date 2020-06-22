const alunos = [
    {nome:"João",nota : 2.2,bolsista:false},
    {nome:"Maria",nota : 7.9,bolsista:false},
    {nome:"Pedro",nota : 8.8,bolsista:false},
    {nome:"Ana",nota : 4.4,bolsista:false}
];


const todosBolsistas = alunos.map(a=>{return a.bolsista}).reduce(function(anterior,atual){
    return anterior && atual;
});

const algumBolsista = alunos.map(a=>{return a.bolsista}).reduce(function(anterior,atual){
    return anterior || atual;
});

console.log(todosBolsistas,algumBolsista);
const alunos = [
    {nome:"João",nota : 2.2,bolsista:false},
    {nome:"Maria",nota : 7.9,bolsista:true},
    {nome:"Pedro",nota : 8.8,bolsista:false},
    {nome:"Ana",nota : 4.4,bolsista:true}
];

const resultado = alunos.map(a=>a.nota).reduce((s,i)=>{
    console.log(s.toFixed(1),i.toFixed(1));
    return s + i;
});

console.log(resultado.toFixed(1))
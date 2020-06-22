const Escola = [
    {
        nome : "Turma M1",
        alunos : 
        [
            {nome:"Gustavo",nota:8.1},
            {nome:"Ana",nota:9.3}
        ]
    },
    {
        nome : "Turma M2",
        alunos : 
        [
            {nome:"Rebeca", nota:8.9},
            {nome:"Roberto",nota:7.3}
        ]
    }
];

const getNoteAluno = aluno => aluno.nota;
const getNotasTurma = turma => turma.alunos.map(getNoteAluno)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

console.log(Escola.flatMap(getNotasTurma))
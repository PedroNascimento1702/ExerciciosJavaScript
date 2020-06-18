const pessoa = {
    nome : "Pedro",
    idade : 19,
    endereco : {
        logradouro : "Florianopolis",
        numero : 115
    },
    trabalho : "programador",
    faculdade : "ADS"
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) => {
    if (chave === 'endereco') {
        console.log(chave,Object.values(valor).join(','))
    }
    else {
        console.log(chave,valor)
    }
    
});

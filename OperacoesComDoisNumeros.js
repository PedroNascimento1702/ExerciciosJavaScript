function operacoes(n1,n2)
{
    return `
        Soma : ${n1 + n2};
        Subtração : ${n1 - n2};
        Multiplicação : ${n1 * n2};
        Divisão : ${n1 / n2};
    `
}

console.log(operacoes(5,4));
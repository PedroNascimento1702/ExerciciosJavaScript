function retornaDinheiroFormatado(valor)
{
    return "R$" + valor.toFixed(2).replace(".",",");
}


console.log(retornaDinheiroFormatado(0.30000000000000004));
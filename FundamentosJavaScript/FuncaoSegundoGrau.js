function CalculaFuncaoSegundoGrauBaskara(a,b,c)
{
    let Delta = Math.pow(b,2) - 4 * a * c;   

    if(Delta < 0)
        return "Delta é negativo";
        
    let x1 = (-b + Math.sqrt(Delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(Delta)) / (2 * a);

    return [x1,x2];
}


console.log(CalculaFuncaoSegundoGrauBaskara(-3,-5,12))
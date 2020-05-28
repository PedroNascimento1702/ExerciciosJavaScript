function triangulo(l1,l2,l3)
{
    let dif12 = l1 - l2 < 0 ? (l1 - l2) * -1 : l1 - l2;
    let dif13 = l1 - l3 < 0 ? (l1 - l3) * -1 : l1 - l3;
    let dif23 = l2 - l3 < 0 ? (l2 - l3) * -1 : l2 - l3;
    
    if(!(dif12 < l3 && l3 < l1 + l2))
    {
        console.log("Não é um triângulo");
    }
    else if(!(dif13 < l2 && l2 < l1 + l3))
    {
        console.log("Não é um triângulo");
    }
    else if(!(dif23 < l1 && l1 < l2 + l3))
    {
        console.log("Não é um triângulo");
    } 
    else
    {
        if(l1 == l2 && l2 == l3)
        {
            console.log("Triângulo equilátero");
        }
        else if(l1 == l2 || l2 == l3 || l1 == l3)
        {
            console.log("Triângulo isósceles");
        }
        else
        {
            console.log("Triângulo escaleno");
        }
    }
}

triangulo(234,4,23);
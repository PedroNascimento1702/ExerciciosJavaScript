function lerJogos(listaDeJogos)
{
    const Lista = listaDeJogos.split(" ");
    let RecordeAtual = Lista[0];
    let RecordesBatidos = 0;
    let PiorJogo = 1;

    for(let pontuacao in Lista)
    {
        if(Lista[pontuacao] < Lista[PiorJogo - 1])
            PiorJogo = pontuacao;
        
        if(Lista[pontuacao] > RecordeAtual)
        {
            RecordesBatidos++;
            RecordeAtual = Lista[pontuacao];
        }
            
    }

    return [RecordesBatidos,PiorJogo];
}

console.log(lerJogos("0 1 2 3 7"));
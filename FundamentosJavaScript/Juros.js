function CalculaMontanteJurosSimples(CapitalInicial,TaxaJuros,TempoAplicacao)
{
    return CapitalInicial + (CapitalInicial * TaxaJuros * TempoAplicacao);
}

function CalculaMontanteJurosCompostos(CapitalInicial,TaxaJuros,TempoAplicacao)
{
   return  CapitalInicial * Math.pow(1 + TaxaJuros,TempoAplicacao);
}

console.log(CalculaMontanteJurosCompostos(7000,0.015,12).toFixed(2))
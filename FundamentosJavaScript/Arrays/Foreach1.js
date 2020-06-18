const aprovados = ['Agatha','Aldo','Daniel','Raquel'];

aprovados.forEach( (a,i) => { console.log(`${i + 1}) ${a}`) });


const exibirAprovados = aprovado => { console.log(aprovado); };

aprovados.forEach(exibirAprovados);
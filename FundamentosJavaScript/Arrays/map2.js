const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

//retorna array com precos
const precos = carrinho.map( item => { return JSON.parse(item).preco } );
console.log(precos);
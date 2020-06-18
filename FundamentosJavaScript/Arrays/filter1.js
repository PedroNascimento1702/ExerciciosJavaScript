const produtos = [
    { nome : "notebook", preco : 2499, fragil : true },
    { nome : "ipad pro", preco : 4199, fragil : true },
    { nome : "Copo de vidro", preco : 12.49, fragil : true },
    { nome : "Copo de plástico", preco : 18.49, fragil : false }
];

console.log(produtos.filter(p => { return p.fragil == true && p.preco > 500 } ))
//coleção dinamica chave/valor
/*
const produto = new Object();
produto.nome = "Sabao"
produto['marca'] = "Omo"
produto.preco = 45.2
console.log(produto)

delete produto.preco
console.log(produto)
*/

const carro = {
    maxVel : 200,
    actVel : 0,
    aceleracao : 20,
    acelerar(){
        let newVel = this.actVel + this.aceleracao
        this.actVel = newVel > this.maxVel ? this.maxVel : newVel
    },
    mostrarVelocidade(){
        return `Velocidade atual ${this.actVel}`
    }
}

const ferrari = {
    modelo : "Ferrari FF20",
    maxVel : 340,
    mostrarVelocidade(){
        return `Carro ${this.modelo} ${super.mostrarVelocidade()}`
    },
    __proto__ : carro
}

ferrari.acelerar(); ferrari.acelerar();ferrari.acelerar();ferrari.acelerar();ferrari.acelerar();ferrari.acelerar();ferrari.acelerar();
console.log(ferrari.mostrarVelocidade())
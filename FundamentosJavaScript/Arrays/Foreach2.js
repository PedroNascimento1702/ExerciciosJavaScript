Array.prototype.forEach2 = function(callback){
    for (let index = 0; index < this.length; index++) {
        callback(this[index],index,this);
    }
}

const aprovados = ['Agatha','Aldo','Daniel','Raquel'];

aprovados.forEach2( (a,i) => { console.log(`${i + 1}) ${a}`) });
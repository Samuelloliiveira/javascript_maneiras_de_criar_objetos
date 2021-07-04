//Prototype

// console.log('samuel'.toUpperCase())

function Microfone(color = 'black') {
    this.color = color
    this.isOn = true
}

//add função na cadeia de prototipos
Microfone.prototype.toggleOnOff = () => {
    if(this.isOn) {
        console.log('desligar')
    }else{
        console.log('ligar')
    }

    this.isOn = !this.isOn
}

//função construtora
const microfone = new Microfone()//criando um objeto. A função agora faz parte da cadeia de Prototipos.
const microfone2 = new Microfone('white')

console.log(microfone)
console.log(microfone2)

microfone2.toggleOnOff()//a função mesmo não estando dentro da função Microfone ela existe na cadeia de prototipos
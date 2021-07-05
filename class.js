//Class

class Microfone {
    constructor(color = 'black') {
        this.color = color
        this.isOn = true
    }

    toggleOnOff() {
        if(this.isOn) {
            console.log('desligar')
        }else{
            console.log('ligar')
        }
    
        this.isOn = !this.isOn
    }
}

const microfone = new Microfone()
const microfone2 = new Microfone('white')

microfone.toggleOnOff()
microfone.toggleOnOff()


console.log(microfone)
console.log(microfone2)

//syntactic sugar
//Prototype under the hood
//clareza visual

//obs: não é igual a classe oriedada a objetos
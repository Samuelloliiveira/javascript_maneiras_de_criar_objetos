//Object Literal 
const microfone = {
    color: 'black',
    isOn: true,
    toggleOnOff() {
        if(microfone.isOn) {
            console.log('desligar')
        }else{
            console.log('ligar');
        }

        microfone.isOn = !microfone.isOn//negando que é verdadeiro
    }//Shorthand Properties - Forma curta de fazer uma função em um objeto
}

console.log(microfone.color)
microfone.toggleOnOff()//no primeiro momento o fone esta ligado logo ele avisa desligar
microfone.toggleOnOff()//fone ligado, avisa ligar


/**
 * Pós: Fácil explicação
 * 
 * Contra: se precisar mudar o valor de uma propriedade vai precrisar
 * reescrever o código, caso o primeiro valor ainda precise ser usao. Exeplo: fazer
 * vinte microfone de cor diferente.
 */

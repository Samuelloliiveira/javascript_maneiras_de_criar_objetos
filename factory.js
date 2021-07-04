//FACTORY = Padrão de projeto, significa Fabrica

function createMicrofone(color = 'black') {
    let isOn= true

    return {
        color,
        isOn,

        toggleOnOff() {
            if(isOn) {
                console.log('desligar')
            }else{
                console.log('ligar');
            }

            isOn = !isOn
        }
    }
}


const microfoneBlack = createMicrofone()//Começa como preto
const microfoneWhite = createMicrofone('white')

console.log(microfoneBlack.color)
console.log(microfoneWhite.color)

//Pode colocar o object literal como retorno
//Mantém a variável dentro do escopo da função

//contra: recriação de funções internas
let buttons = document.querySelectorAll('button')
const result = document.querySelector('.result')
const yourResult = document.querySelector('.your-score')
const machineResult = document.querySelector('.machine-score')

buttons.forEach(button => {
    button.addEventListener('click', () => play(button.id));
});

let yourScore = 0
let machineScore = 0

let play = playerChoice => {
    let choices = ['rock', 'paper', 'scissors']
    let machineChoice = choices[Math.floor(Math.random() * 3)]

    if(playerChoice === machineChoice){
        result.innerHTML = `Resultado da partida:
        <br>
        Empate!
        <br>
        Sua escolha: ${playerChoice}
        <br>
        Escolha da Alexa: ${machineChoice}`
    } else if (
        (playerChoice === "rock" && machineChoice === "scissors") ||
        (playerChoice === "paper" && machineChoice === "rock") ||
        (playerChoice === "scissors" && machineChoice === "paper")
    ) {
        result.innerHTML = `Resultado da partida:
        <br>
        Você venceu!
        <br>
        Sua escolha: ${playerChoice}
        <br>
        Escolha da Alexa: ${machineChoice}`

        yourScore++
        yourResult.innerHTML = `Sua pontuação: <span>${yourScore}</span>`
    } else {
        result.innerHTML = `Resultado da partida:
        <br>
        Alexa venceu!
        <br>
        Sua escolha: ${playerChoice}
        <br>
        Escolha da Alexa: ${machineChoice}`

        machineScore++
        machineResult.innerHTML = `Pontuação da Alexa: <span>${machineScore}</span>`
    }
}


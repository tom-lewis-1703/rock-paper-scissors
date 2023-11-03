const choices = ["ROCK", "PAPER", "SCISSORS"]

function get_user_input(){
    let user_input = window.prompt("Enter rock, paper, or scissors\n").toUpperCase()
    return user_input
}

function get_cpu_input(){
    let cpu_input = choices[Math.floor(Math.random() * choices.length)]
    return cpu_input
}

function game(){
    let user_input = get_user_input()
    let cpu_input = get_cpu_input()
    let cont = "y"

    do {
        if (user_input == cpu_input){
            console.log(f`Draw!\nYou both chose ${user_input}`)
        } else if (user_input == "ROCK" && cpu_input == "SCISSORS"){
            console.log(f`The cpu chose ${cpu_input.toLowerCase()}.\n`)
            console.log("You win!")
        } else if (user_input == "ROCK" && cpu_input == "PAPER"){
            console.log(f`The cpu chose ${cpu_input.toLowerCase()}.\n`)
            console.log("You lose...")
        } else if (user_input == "SCISSORS" && cpu_input == "ROCK"){
            console.log(f`The cpu chose ${cpu_input.toLowerCase()}.\n`)
            console.log("You lose...")
        } else if (user_input == "SCISSORS" && cpu_input == "PAPER"){
            console.log(f`The cpu chose ${cpu_input.toLowerCase()}.\n`)
            console.log("You win!")
        } else if (user_input == "PAPER" && cpu_input == "ROCK"){
            console.log(f`The cpu chose ${cpu_input.toLowerCase()}.\n`)
            console.log("You win!")
        } else if (user_input == "PAPER" && cpu_input == "SCISSORS"){
            console.log(f`The cpu chose ${cpu_input.toLowerCase()}.\n`)
            console.log("You lose...")
        }

        cont = prompt("Would you like to play again? (y/n)\n")
    } while (cont == 'y');
}

game()
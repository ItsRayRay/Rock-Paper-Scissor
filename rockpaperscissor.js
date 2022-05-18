const playerTwoHand = ["rock","paper", "scissor"]
const playerSelection = "rock";
let playerIsAlive = ["♥️","♥️","♥️","♥️","♥️", false]     // health bars if player or computer loses it triggers a shift .shift until it reaches the false boolean that triggers an else statement
let computerIsAlive = ["♥️","♥️","♥️","♥️","♥️",false]

function computerPlay(min) {
return min[Math.floor(Math.random() * min.length)];     // generates a random number that picks the (string) hand within the array
}         

console.log(computerPlay(playerTwoHand)) 
console.log(playerSelection)

function playRound(playerSelection, computerSelection) {

    if (playerIsAlive[0] && computerIsAlive[0]) {

         if (playerSelection === computerSelection) {
              console.log("Draw!")       
          } else if ( playerSelection === "rock" && computerSelection ==="paper") {
                console.log("Paper wins!")
                playerIsAlive.shift("♥️")
    
              } else if ( playerSelection === "rock" && computerSelection ==="scissor") {
              console.log("Rock Wins!")
              computerIsAlive.shift("♥️")
    
            } else if ( playerSelection === "paper" && computerSelection ==="scissor") {
              console.log("Scissor wins!")
              playerIsAlive.shift("♥️")
    
            } else if ( playerSelection === "paper" && computerSelection ==="rock") {
               console.log("Paper wins!")
               computerIsAlive.shift("♥️")
    
             } else if ( playerSelection === "scissor" && computerSelection ==="paper") {                        
              console.log("scissor wins!")
              computerIsAlive.shift("♥️")
                
             } else if ( playerSelection === "scissor" && computerSelection ==="rock") {
              console.log("rock wins!")
              playerIsAlive.shift("♥️") 
            }                   
            
    } else if (computerIsAlive[0] === false) {
        console.log("You Win!")
    } else if (playerIsAlive[0] === false  ) {
        console.log ("You Lose!")
    }              
                            
    console.log(playerIsAlive)
    console.log(computerIsAlive)
}                                                                
                       
playRound(playerSelection, computerPlay(playerTwoHand))


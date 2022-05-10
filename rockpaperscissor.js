const playerTwoHand = ["rock","paper", "scissor"]
const playerSelection = "rock";

function computerPlay(min) {

return min[Math.floor(Math.random() * min.length)];

}

            
console.log(computerPlay(playerTwoHand)) 
console.log(playerSelection)

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        console.log("Draw!")       
    } else if ( playerSelection === "rock" && computerSelection ==="paper") {
     console.log("Paper wins!")
    
    } else if ( playerSelection === "rock" && computerSelection ==="scissor") {
        console.log("Rock Wins!")
    
       } else if ( playerSelection === "paper" && computerSelection ==="scissor") {
        console.log("Scissor wins!")
    
       } else if ( playerSelection === "paper" && computerSelection ==="rock") {
        console.log("Paper wins!")
    
       } else if ( playerSelection === "scissor" && computerSelection ==="paper") {                        
        console.log("scissor wins!")
    
       } else if ( playerSelection === "scissor" && computerSelection ==="rock") {
        console.log("rock wins!")
       }
            
}

playRound(playerSelection, computerPlay(playerTwoHand))

                                                                             


                                                   
                                                                  

       




              









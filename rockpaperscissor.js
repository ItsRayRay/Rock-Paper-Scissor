
const playerTwoHand = ["rock","paper", "scissor"]
const playerSelection = "paper";

const heart5Player = document.getElementById("heart5")
const heart4Player = document.getElementById("heart4")
const heart3Player = document.getElementById("heart3")
const heart2Player = document.getElementById("heart2")
const heart1Player = document.getElementById("heart1")


const heart5Pc = document.getElementById("heartpc5")
const heart4Pc = document.getElementById("heartpc4")
const heart3Pc = document.getElementById("heartpc3")
const heart2Pc = document.getElementById("heartpc2")
const heart1Pc = document.getElementById("heartpc1")


const neonFooter = document.getElementById("neonTextFooter")
const pcHand = document.getElementById("pchand")


let playerIsAlive = [5,4,3,2,1, false]     
// health bars if player or computer loses it triggers a shift .shift until it reaches the false boolean that triggers an else statement
let computerIsAlive = [5,4,3,2,1,false]


function computerPlay(min) {
return min[Math.floor(Math.random() * min.length)];     // generates a ra number that picks the (string) hand within the array
}                    

console.log(computerPlay(playerTwoHand)) 
console.log(playerSelection)   




const rockButton = document.getElementById("rock-button")
rockButton.addEventListener('click', () => {
  
playRound("rock", computerPlay(playerTwoHand))

})


const paperButton = document.getElementById("paper-button")
paperButton.addEventListener('click', () => {
  playRound("paper", computerPlay(playerTwoHand))

  })
  
  

const ScissorsButton = document.getElementById("scissors-button")
ScissorsButton.addEventListener('click', () => {
  playRound("scissor", computerPlay(playerTwoHand))
  
  })
  
  

function playRound(playerSelection, computerSelection) {

    if (playerIsAlive[0] && computerIsAlive[0]) {

         if (playerSelection === computerSelection) {
          pcHand.textContent = "👻"  
          neonFooter.textContent ="Its' a draw"  
          } else if ( playerSelection === "rock" && computerSelection ==="paper") {
                playerIsAlive.shift()
                pcHand.textContent = "🧻"
                neonFooter.textContent ="Paper Wins!"
    
              } else if ( playerSelection === "rock" && computerSelection ==="scissor") {

              computerIsAlive.shift()
              pcHand.textContent = "✂️"
              neonFooter.textContent ="Rock Wins!"
    
            } else if ( playerSelection === "paper" && computerSelection ==="scissor") {
 
              playerIsAlive.shift()
              pcHand.textContent = "✂️"
              neonFooter.textContent ="Scissors Wins!"
    
            } else if ( playerSelection === "paper" && computerSelection ==="rock") {
               console.log("Paper wins!")
               computerIsAlive.shift()
               pcHand.textContent = "🪨"
               neonFooter.textContent ="Paper Wins!"
    
             } else if ( playerSelection === "scissor" && computerSelection ==="paper") {                        

              computerIsAlive.shift()
              pcHand.textContent = "🧻"
              neonFooter.textContent ="Scissors Wins!"
                
             } else if ( playerSelection === "scissor" && computerSelection ==="rock") {

              playerIsAlive.shift() 
              pcHand.textContent = "🪨"
              neonFooter.textContent ="Rock Wins!"
            }                   
            
    } else if (computerIsAlive[0] === false) {
        console.log("You Win!")
    } else if (playerIsAlive[0] === false  ) {
        console.log ("You Lose!")
    }              




// an if statement if the array hits a specific number this manipulates the DOM hearts 


//player heart counter

    if (playerIsAlive[0] === 4) {

      const brokenHeart5Player = heart5Player.textContent = "💔"
      
     
    }  else if (playerIsAlive[0] === 3) {
    
      let brokenHeart4Player = heart4Player.textContent = "💔"
    
    } else if (playerIsAlive[0] === 2) {
    
      let brokenHeart3Player = heart3Player.textContent = "💔"
      
    } else if (playerIsAlive[0] === 1) {
    
      let brokenHeart2Player = heart2Player.textContent = "💔"
    
      
    } else if (playerIsAlive[0] === false) {
    
      let brokenHeart1Player = heart1Player.textContent = "💔"
      
    }



//pc heart counter 

    if (computerIsAlive[0] === 4) {

      let brokenHeart5Pc = heart5Pc.textContent = "💔"
      
     
    }  else if (computerIsAlive[0] === 3) {
    
      let brokenHeart4Pc = heart4Pc.textContent = "💔"
    
    } else if (computerIsAlive[0] === 2) {
    
      let brokenHeart3Pc = heart3Pc.textContent = "💔"
      
    } else if (computerIsAlive[0] === 1) {
    
      let brokenHeart2Pc = heart2Pc.textContent = "💔"
    
      
    } else if (computerIsAlive[0] === false) {
    
      let brokenHeart1Pc = heart1Pc.textContent = "💔"
      
    }
           
    


    console.log(playerIsAlive)
    console.log(computerIsAlive)
}                                                         



                       
playRound(playerSelection, computerPlay(playerTwoHand))






                                                
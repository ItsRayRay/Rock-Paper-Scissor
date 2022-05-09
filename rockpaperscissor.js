
const playerOneHand = ["rock","paper", "scissor"]
const playerTwoHand = ["rock","paper", "scissor"]


                      
const buttonRock = playerOneHand[0]

const buttonPaper = playerOneHand[1]

const buttonScissor = playerOneHand[2]


const randomHandPlayerOne = playerOneHand [Math.floor(Math.random() * playerOneHand.length)];
const randomHandPlayerTwo = playerTwoHand [Math.floor(Math.random() * playerTwoHand.length)];  //picks a random string from an array

//source  https://www.codegrepper.com/code-examples/javascript/javascript+pick+random+string+from+array%5D


console.log(randomHandPlayerOne)
console.log(randomHandPlayerTwo)


if (randomHandPlayerOne === randomHandPlayerTwo) {
    console.log("Draw!")       
} else if ( randomHandPlayerOne === "rock" && randomHandPlayerTwo ==="paper") {
 console.log("Paper wins!")

} else if ( randomHandPlayerOne === "rock" && randomHandPlayerTwo ==="scissor") {
    console.log("Rock Wins!")

   } else if ( randomHandPlayerOne === "paper" && randomHandPlayerTwo ==="scissor") {
    console.log("Scissor wins!")

   } else if ( randomHandPlayerOne === "paper" && randomHandPlayerTwo ==="rock") {
    console.log("Paper wins!")

   } else if ( randomHandPlayerOne === "scissor" && randomHandPlayerTwo ==="paper") {                        
    console.log("scissor wins!")

   } else if ( randomHandPlayerOne === "scissor" && randomHandPlayerTwo ==="rock") {
    console.log("rock wins!")
   }


                                                                 
                                             
   

         

       
                                                   
                                                                  

       




              









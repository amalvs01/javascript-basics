let  hands = ["rock", "papper",  "scissor"]

//create  a funcgtion tht returns a random items from the array

function getHand(){
  let randomIndex = Math.floor(Math.random() * 3 )// 0-2.9999
  return hands[randomIndex]
}

console.log( getHand())
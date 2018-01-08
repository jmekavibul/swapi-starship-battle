const shipsDisplay = document.getElementById("ships")
const shipsData = document.getElementById("ship data")
const game = document.getElementById("game")

window.onload = () => {
  getStarships()

}


setTimeout(function() {
  let container = document.getElementById("greeting");
  container.innerHTML = "<h1>Greetings from the Dark Side!</h1>";

}, 5000);

console.log("hello")
async function getStarships() {
  try{
    let response = await fetch ("https://swapi.co/api/starships/")
    let starships= await response.json()
    console.log(starships)
    renderStarships(starships)    
      } catch (error) {
      console.log(error)
  }
}
    
renderStarships = (data) => {
  let num1 = Math.floor(Math.random() * 10)
  let num2 = Math.floor(Math.random() * 10)
  
  const starships = data.results
  let starships1 = starships[num1] 
  let starships2 = starships[num2]
  let shipNames = starships1.name
  let shipNames2 = starships2.name
  
  playGame()
  

  
  shipsDisplay.innerText = shipNames + " VS. " + shipNames2 + "\n "

  // let winnerDecider= Math.round(Math.random() )

  let winnerDecider = 0
  if(winnerDecider==0){
    shipsDisplay.innerText += shipNames
    // shipCool = starships.map((a) => {
    //   name = a.results
    //   return `<li>${name}</li>`
    // })
    // shipsData.innerText = `<ul>${name.join("")}</ul>`
    shipsData.innerText = JSON.stringify(starships1)
  }
  else{
    shipsDisplay.innerText += shipNames2
    shipsData.innerText = JSON.stringify(starships2)
  }
}

playGame = () => {
  let randomLetter = 97 +  Math.floor(Math.random() * 25)  
  let randomChar = String.fromCharCode(randomLetter)
  console.log(randomChar)
  game.innerText = "Click this letter to figure out who wins! " + randomChar;
  window.onkeypress = () => {
    var keys = event.keyCode;
    if(keys==randomLetter)
      alert("Somebody won; I don't know who though...")
    }
}
//generate two random numbers from range 0 to 37
//Print the name of the object from a list of objects (containing ships)
//compare values within that objects e.g. cost or speed
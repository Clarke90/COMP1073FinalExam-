// ROLLING THE DICE 
// declaring all of the dice images and their src to be pulled in 
var face0 = new Image()
face0.src = "Content/img/dice1.png"
var face1 = new Image()
face1.src = "Content/img/dice2.png"
var face2 = new Image()
face2.src = "Content/img/dice3.png"
var face3 = new Image()
face3.src = "Content/img/dice4.png"
var face4 = new Image()
face4.src = "Content/img/dice5.png"
var face5 = new Image()
face5.src = "Content/img/dice6.png"

// The function to roll the dice
function TossTheDice() {
    //Dice #1     
    //create a random integer between 0 and 6
    var randomdice = Math.round(Math.random() * 5)
    //pull image from the src 
    document.images["rolldice"].src = eval("face" + randomdice + ".src")
    // print the number being generated 
    document.getElementById("outputDiv").innerHTML = randomdice.toString();

    //Dice #2
    //create a random integer between 0 and 6 and offset this dice roll by adding one 
    var randomdice = Math.round(Math.random() * 5)
    //pull image from the src 
    document.images["rolldice2"].src = eval("face" + randomdice + ".src")
    // print the number being generated
    document.getElementById("outputDiv2").innerHTML = randomdice.toString();
}

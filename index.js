var randomNumber1 =Math.floor(Math.random() * 6) + 1;
var randomNumber2 =Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "images" +"/dice" +randomNumber1+ ".png";
var randomDiceImg2 = "images" +"/dice" +randomNumber2+ ".png";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceImg);
image2.setAttribute("src", randomDiceImg2);
if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = " Player1 Wins !";
}
else if ( randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " Player 2 Wins !";
}
else  { 
 document.querySelector("h1").innerHTML = " Draw! ";
}

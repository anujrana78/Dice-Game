document.querySelector("h1").style.color = "red";

var randomNumber = Math.round(Math.random()*5 )+ 1;
console.log (randomNumber);

document.querySelector("img").setAttribute("src", "/images/dice"+randomNumber +".png");

var randomNumber2 = Math.round(Math.random()*5 )+ 1;
console.log(randomNumber2);

document.getElementsByTagName("img") [1].setAttribute("src", "/images/dice" + randomNumber2 + ".png");

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is Winner";
}else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 is winner";
}else document.querySelector("h1").innerHTML = "TRY AGAIN PLEASE";

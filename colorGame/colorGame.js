// var colors = [
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"
// ]
var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];

		}else {
			squares[i].style.display = "none";

		}
	}


})
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	numSquares = 6;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <squares.length; i++){

	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
		
	}
})



for(var i = 0; i < squares.length; i ++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listener to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
    //compare to picked color
    if(clickedColor === pickedColor){
    	messageDisplay.textContent = "Correct!";
    	messageDisplay.style.color = "black"
    	resetButton.textContent ="Play Again"
    	changeColors(clickedColor);
    	h1.style.backgroundColor = clickedColor;

    }else{
    	this.style.background = "steelblue";
    	messageDisplay.textContent = "Try Again"
    }

});
}

function changeColors(color){
//loop through all squares
	for (var i = 0;i <squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make a array
	var arr =  []; 
   //repeat num times

for(var i = 0; i < num ; i++){
	//get random color and push into array
	arr.push(randomColor())

}
return arr;


}
function randomColor(){
	// random r in rgb
	var r = Math.floor(Math.random()*256);
	//random g in rgb
	var g = Math.floor(Math.random()*256);
	// random b in rgb 
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
//generate all new colors
colors = generateRandomColors(numSquares);
// pick a random color from the array
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
this.textContent = "New Colors";
//change colorDisplay to match picked color
for(var i =0; i <squares.length; i ++){
	squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor= "steelblue";
messageDisplay.textContent = "";
})

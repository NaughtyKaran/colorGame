var numSquares= 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var message = document.querySelector("#message");
var head = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	head.style.background="steelblue";
	numSquares= 3;
	colors= generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	for( var i=0; i<squares.length; i++)
	{
		if( colors[i])
		{
			squares[i].style.background= colors[i];
		}
		else{
			squares[i].style.display= "none";
		}
	}
	message.textContent= "";
	reset.textContent="new colors?";

});
hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	head.style.background="steelblue";
	numSquares= 6;
	colors= generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	for( var i=0; i<squares.length; i++)
	{
		
		
			squares[i].style.background= colors[i];
		    squares[i].style.display="block";
		
	}message.textContent="";
	reset.textContent=" new colors?";

});
reset.addEventListener("click", function(){
	reset.textContent="new colors?";
	//generate new colors
	numSquares=6 ;
	colors=generateRandomColors(numSquares);
	//pick new colors
	pickedColor=pickColor();
	// change the display of the h1 to the pickedcolor
	colorDisplay.textContent=pickedColor;
	//change colors of the square
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	head.style.background="steelblue";
	message.textContent= ""
});
colorDisplay.textContent= pickedColor;	
for( var i=0; i<squares.length; i++)
{
	//add intial colors to the squares
	squares[i].style.background= colors[i];
	// add click listeners to the sqaures;
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if (clickedColor===pickedColor) {
			changeColors(pickedColor);
			message.textContent= "correct answer";
			head.style.background=pickedColor
			reset.textContent= "play again?";		}
		else{
			this.style.background= "#232323";
			message.textContent= "wrong one";
		}
		
	})
}
function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background= color;
	}
}
function pickColor()
{
	 var randomNo = Math.floor(Math.random()*colors.length);
	 return colors[randomNo];
}
function generateRandomColors(num)
{
	// make an array
	var arr=[];
	//add num random no.s to the array
	for( var i=0; i<num;i++)
	{
		// get random color and push into the array
		arr.push(getRandomColor());
		
	}
	//return that array
	return arr;

}
function getRandomColor()
{
	// get a red from 0 to 255
	var red= Math.floor(Math.random()*256);
	// get a green from 0 to 255
	var green= Math.floor(Math.random()*256);
	// get a blue from 0 to 255
	var blue= Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")";
}

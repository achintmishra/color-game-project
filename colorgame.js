var numSquares=6;
var colours = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colours[3];
var huh = document.getElementById("huh");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click",function()
{
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares=3;
    colours= generateRandomColours(numSquares);
    pickedColor = colours[2];
    huh.textContent= pickedColor;
    for (var i=0;i<squares.length;i++)
    {
        if (colours[i])
        {
            squares[i].style.backgroundColor=colours[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});
hard.addEventListener("click",function()
{
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares=6;
    colours= generateRandomColours(numSquares);
    pickedColor = colours[3];
    huh.textContent= pickedColor;
    for (var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colours[i];
        squares[i].style.display = "block";
    }
});
resetButton.addEventListener("click",function()
{
    colours=generateRandomColours(numSquares);
    pickedColor=colours[1];
    huh.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colours[i];
    }
    h1.style.backgroundColor="steelblue";
});
huh.textContent = pickedColor;
for (var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colours[i];
    squares[i].addEventListener("click",function()
    {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor)
        {
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent="Play Again!";
            messageDisplay.textContent="correct!";
        }
        else
        {
            resetButton.textContent="New Colours";
            messageDisplay.textContent="Try Again!";
        }
    });
}
function generateRandomColours(num)
{
    var arr=[]
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor()
{
    var R = Math.floor(Math.random()*256);
    var G = Math.floor(Math.random()*256);
    var B = Math.floor(Math.random()*256);
    return "rgb("+R+", "+G+", "+B+")";
}
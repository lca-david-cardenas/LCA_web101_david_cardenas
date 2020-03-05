// used to test javasript linking
// document.getElementById("tictactoe-gameboard").onload = alert("Gameboard loaded");

var gameMarker = "Y"

function changeMarkerToX(){
    gameMarker = "X";
    console.log("The " + gameMarker + " button was clicked!");
    startGame();
    document.getElementById("gamelabel").innerHTML = "X's turn.<br> Click a square.";
}

function changeMarkerToO(){
    gameMarker = "O";
    console.log("The " + gameMarker + " button was clicked!");
    startGame();
    document.getElementById("gamelabel").innerHTML = "O's turn.<br> Click a square.";
}

function placemark(eID)
{
    if (gameMarker=="Y")
    {
        alert("Please choose X or O to start the game.")
    }
    else if (document.getElementById(eID).innerHTML=="X" || document.getElementById(eID).innerHTML=="O")
        alert("Area is already filled. Please choose an open area.")
    else
    {
        document.getElementById(eID).innerHTML = gameMarker;
        if( gameMarker == "X")
        {
            gameMarker = "O";
            document.getElementById("gamelabel").innerHTML = "O's turn.<br> Click a square.";
        }
        else
        {
            gameMarker = "X";
            document.getElementById("gamelabel").innerHTML = "X's turn.<br> Click a square.";
        }

    }
}

function startGame()
{
    document.getElementById("Xbutton").classList.add("no_show");
    document.getElementById("Obutton").classList.add("no_show");
    document.getElementById("reset").classList.remove("no_show");
}

function reset(){
    location.reload();
}

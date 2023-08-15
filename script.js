let board = [];
let playerOne = "X";
let playerTwo = "O";
let currPlayer = playerOne; 
let gameOver = false;
let counter = 0;

window.onload = function () {
    setGame();
    restartGame();
}

function setGame(){
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    for (let row = 0; row < 3; row++) 
    {
        for (let column = 0; column < 3; column++) 
        {
            let tile = document.createElement("div");
            tile.id = row.toString() + "-" + column.toString();
            tile.classList.add("board");
            document.getElementById("gameboard").append(tile);

            tile.addEventListener("click", setTile);
        }
    }
}

function setTile()
{
    if (gameOver == true)
    {
        return;
    }


    let coords = this.id.split("-");
    let row = parseInt(coords[0]);
    let column = parseInt(coords[1]);

    board[row][column] = currPlayer;
    console.log(board);

    if (this.innerText == "")
    {
        if (currPlayer == playerOne)
        {
        this.innerText = playerOne;
        currPlayer = playerTwo
        
        }
        else
        {
            this.innerText = playerTwo;
            currPlayer = playerOne;

        }
        counter++;
        console.log(counter);
        if (counter == 9)
        {
            
            let gg = document.createElement("div");
            document.getElementById("topUI").append(gg);
            gg.innerText = "Game is a Draw.";
            gg.classList.add("gamedisplay");
            gameOver = true;
        }
    }
    else
    {
        return;
    }
    checkGameOver();

}


function restartGame()
{
    let restarting = document.getElementById("restart");
    restarting.addEventListener("click", restartingGame);
    
}

function restartingGame()
{
    for (let row = 0; row < 3; row++) 
    {
        for (let column = 0; column < 3; column++) 
        {
           board[row][column] = "";
           console.log(board);
           let tileId = row + "-" + column;
            let tileElement = document.getElementById(tileId);
            tileElement.innerText = ""; 
        
           
        }
    }
  
    let parentContainer = document.getElementById("topUI"); 

    
    let divToRemove = parentContainer.querySelector(".gamedisplay");
    
    if (divToRemove && divToRemove.parentNode === parentContainer) {
        parentContainer.removeChild(divToRemove);
    }
        
    currPlayer = playerOne; 
    gameOver = false;
    counter = 0;
}

function checkGameOver()
{
    // if (tile.innerText == "X")
    // {
    //     console.log("gameover");
    // }
}
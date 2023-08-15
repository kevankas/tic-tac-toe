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
        
    }
    else
    {
        return;
    }
    checkGameOver();

    counter++;
        if (counter == 9 && gameOver == false)
        {
            
            let gg = document.createElement("div");
            document.getElementById("topUI").append(gg);
            gg.innerText = "Game is a Draw.";
            gg.classList.add("gamedisplay");
            gameOver = true;
            
        }

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
           let tileId = row + "-" + column;
            let tileElement = document.getElementById(tileId);
            tileElement.innerText = ""; 
            
            let removing = document.getElementsByClassName("winner");

            for (let i = 0; i < removing.length; i++) {
                removing[i].classList.remove("winner");
            }
        
           
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
 for (let row = 0; row < 3; row++)//horizontal check
 {
    if ((board[row][0] == board[row][1]) && (board[row][1] == board[row][2]) && (board[row][0] != ""))
    {
        if (board[row][0] == "X")
        {
            let gg = document.createElement("div");
            document.getElementById("topUI").append(gg);
            gg.innerText = "Game Over! X WINS!";
            gg.classList.add("gamedisplay");
           
        //    for (let col = 0; col < 3; col++) {
        //     let cellId = row + "-" + col;
        //     let cellElement = document.getElementById(cellId);
        //     cellElement.classList.add("winner");
            
        // }
           
        } 
        else
        {
            let gg = document.createElement("div");
            document.getElementById("topUI").append(gg);
            gg.innerText = "Game Over! O WINS!";
            gg.classList.add("gamedisplay");

        //     for (let col = 0; col < 3; col++) {
        //     let cellId = row + "-" + col;
        //     let cellElement = document.getElementById(cellId);
        //     cellElement.classList.add("winner"); 
        // }
        
        }
        gameOver = true;
        return;
    }
 }
 for (let column = 0; column < 3; column++)//vertical check
 {
    if ((board[0][column] == board[1][column]) && (board[1][column] == board[2][column]) && (board[0][column] != ""))
    { 
        
        if (board[0][column] == "X")
        {
            let gg = document.createElement("div");
            document.getElementById("topUI").append(gg);
            gg.innerText = "Game Over! X WINS!";
            gg.classList.add("gamedisplay");

            
            
            
            
        } 
        else
        {
            let gg = document.createElement("div");
            document.getElementById("topUI").append(gg);
            gg.innerText = "Game Over! O WINS!";
            gg.classList.add("gamedisplay");
        }
        gameOver = true;
        return;
    }
    
    
 }
 if ((board[0][0] == board[1][1]) && (board[1][1] == board[2][2]) && board[0][0] != "") //diag winner
 {
    if (board[0][0] == "X")
    {
        let gg = document.createElement("div");
        document.getElementById("topUI").append(gg);
        gg.innerText = "Game Over! X WINS!";
        gg.classList.add("gamedisplay");
    } 
    else
    {
        let gg = document.createElement("div");
        document.getElementById("topUI").append(gg);
        gg.innerText = "Game Over! O WINS!";
        gg.classList.add("gamedisplay");
    }
    gameOver = true;
    return;
 }
 if ((board[0][2] == board[1][1]) && (board[1][1] == board[2][0]) && board[0][2] != "") //diag winner
 {
    if (board[0][2] == "X")
    {
        let gg = document.createElement("div");
        document.getElementById("topUI").append(gg);
        gg.innerText = "Game Over! X WINS!";
        gg.classList.add("gamedisplay");
    } 
    else
    {
        let gg = document.createElement("div");
        document.getElementById("topUI").append(gg);
        gg.innerText = "Game Over! O WINS!";
        gg.classList.add("gamedisplay");
    }
    gameOver = true;
    return;
 }
}
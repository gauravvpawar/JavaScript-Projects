const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-Info")
const newGameBtn = document.querySelector(".btn");



let currentplayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 

];

//lets create a function to initialise the game
function initGame(){
    currentplayer= "X";
    gameGrid= ["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        // initialise box with css with again
        box.classList = `box box${index+1}`
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current player-${currentplayer}`;
}

initGame();

function swapTurn(){
    if(currentplayer ==="X"){
        currentplayer = "0";
    }
    else
    {
        currentplayer = "X"
    }
    gameInfo.innerText = `Current player - ${currentplayer}`;
}

function checkGameOver(){
   let answer = "";

   winningPositions.forEach((position) =>{
     if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !=="" || gameGrid[position[2]] !== "")
     && (gameGrid[position[0]] === gameGrid[position[1]] ) && ( gameGrid[position[1]] === gameGrid[position[2]])) {

        if(gameGrid[position[0]] === "X")
         answer = "X";
        else
         answer = "0";
        
           

            // disable pointer event
        boxes.forEach((box) =>{
            box.style.pointerEvents = "none";
        })


            // now we know X/O is winner
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
     }


   })

   if(answer !== ""){
    gameInfo.innerText = `Winner Player - ${answer}`;
    newGameBtn.classList.add("active");
    return ; 
   }


//    when there is no one win
   let fillCount = 0;
   gameGrid.forEach((box)=>{
    if (box!== "")
        fillCount++;
   })

   if(fillCount == 9){
    gameInfo.innerText = "Game Tied";
    newGameBtn.classList.add("active")
   }

}

function handelClick(index){
    if (gameGrid[index] === ""){
        boxes[index].innerText = currentplayer;  //innerhtml
        gameGrid[index]= currentplayer;
        boxes[index].style.pointerEvents = "none" ;
        swapTurn();
        checkGameOver();
    }
   
}

boxes.forEach((box , index) => {
    box.addEventListener("click",() => {
            handelClick(index);
        })
     
});

newGameBtn.addEventListener("click",initGame);


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
 
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if(turnO){
        box.innerText = "O";
        turnO = false;
      }else{
        box.innerText = "X";
        turnO = true;
      }
    box.disabled = true;

    checkWinner();
    });
});

const disabled = () => {
   for(let box of boxes){
    box.disabled = true;
   }
}

const enabled = () => {
    for(let box of boxes){
     box.disabled = false;
     box.innerText = "";
    }
 }

const Showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabled();
  }
  
const checkWinner = () => {
    for(let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
            Showwinner(pos1Val);
      }
    }
  }
};


const resetgame= () => {
   turnO = true;
   enabled();
   msgcontainer.classList.add("hide");
}

newgame.addEventListener("click", resetgame);
resetBtn.addEventListener("click",resetgame);



let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-button");
let msgContainer=document.querySelector(".msgcontain")
let msg=document.querySelector("#msg");

let turnO= true; 


const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =  () => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
     
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       console.log("box was clicked") ;
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=false; 

       checkWinner();
      

    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const showWinner=(winner) => {
    msg.innerText = `Congratulations , Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner= () =>{
    for(let pattern of winpatterns){
       /*  console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText); */
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if (pos1Val!= "" && pos2Val !="" && pos3Val!= "")
            {
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    console.log("Winner",pos1Val);

                    showWinner(pos1Val);
                }
            }
    }
}; 

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click",resetGame);



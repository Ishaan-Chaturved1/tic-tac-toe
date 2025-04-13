let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msgcontain");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach(box => {
        box.innerText = "";
        box.classList.remove("disabled");
    });
};

const disableBoxes = () => {
    boxes.forEach(box => {
        box.classList.add("disabled");
    });
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.classList.remove("disabled");
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && !box.classList.contains("disabled")) {
            box.innerText = turnO ? "O" : "X";
            turnO = !turnO;
            box.classList.add("disabled");
            checkWinner();
        }
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

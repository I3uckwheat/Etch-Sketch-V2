const board = document.querySelector("#board")

const button = document.querySelector("button");

button.addEventListener("click", newBoard())

function newBoard() {
  let input;

  do {
    input = Number(prompt("Enter a board size", 8));
  } while(input === NaN)

  generateBoard(input);
}

  function generateBoard(size) {
    for(var i = 0; i < size ** 2; i++) {
    board.appendChild(document.createElement("DIV"));
  }
  addListeners();
}

function addListeners() {
    for(var i = 0; i < board.children.length; i++) {
    board.children[i].addEventListener("mouseenter", e => e.target.style.backgroundColor = "red");
  }
}

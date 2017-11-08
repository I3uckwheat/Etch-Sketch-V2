const board = document.querySelector("#board")

for(var i = 0; i < 8*8; i++) {
  board.appendChild(document.createElement("DIV"));
}

for(var i = 0; i < board.children.length; i++) {
  board.children[i].addEventListener("click", changeColor(board.children[i]));
}

function changeColor(node) {
  console.log(node)
}

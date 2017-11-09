const board = document.querySelector("#board")

for(var i = 0; i < 8*8; i++) {
  board.appendChild(document.createElement("DIV"));
}

for(var i = 0; i < board.children.length; i++) {
  board.children[i].addEventListener("mouseenter", e => e.target.style.backgroundColor = "red");
}

function changeColor(node) {
  node
}

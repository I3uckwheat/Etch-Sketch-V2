const board = document.querySelector("#board")

for(var i = 0; i < 8*8; i++) {
  board.appendChild(document.createElement("DIV"));
}

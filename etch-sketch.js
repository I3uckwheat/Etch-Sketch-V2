const board = document.querySelector("div#board")

for(var i = 0; i < 8*8; i++) {
  board.appendChild(document.createElement("DIV"));
}

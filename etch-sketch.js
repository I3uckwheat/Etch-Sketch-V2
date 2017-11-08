const board = document.querySelector("div#board")


for(var i = 0; i < 8; i++) {
  board.appendChild(document.createElement("DIV"));
}

board.childNodes.forEach(function(child) {
  if(child.nodeType === Node.ELEMENT_NODE) {
    for(var i = 0; i < 8; i++) {
    child.appendChild(document.createElement("DIV"));
    }
  }
});

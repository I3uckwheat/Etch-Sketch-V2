const numberOfSquares = 12;
const board = document.querySelector("#board");
const numberForm = document.forms["grid-size"];

document.body.style.setProperty("--number-of-squares", numberOfSquares);

buildGrid(numberOfSquares);
addListeners();

function buildGrid(num){
  for(let i = num ** 2; i>0; i--) {
    const div = document.createElement('div');
    div.classList.add('grid')
    board.appendChild(div)
  }
}

function addListeners(){
  document.querySelectorAll('.grid').forEach(square =>
    square.addEventListener("mouseover", e =>
      e.target.classList.add('selected'))
  );

   numberForm["button"].addEventListener("click", newGrid);
}

function newGrid() {
  board.innerHTML = "";
  buildGrid(numberForm["num"].value);
  addListeners();
}

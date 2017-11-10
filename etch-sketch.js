const board = document.querySelector("#board");
const button = document.querySelector("button");
const input = document.querySelector("input");


buildGrid(8);
addListeners();

function buildGrid(num){
  board.style.setProperty("--number-of-squares", num);
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

   button.addEventListener("click", newGrid);
}

function newGrid() {
  board.innerHTML = "";
  buildGrid(input.value);
  addListeners();
}

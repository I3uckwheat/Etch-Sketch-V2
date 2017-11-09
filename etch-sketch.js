const numberOfSquares = 12;
document.body.style.setProperty("--number-of-squares", numberOfSquares)
const board = document.querySelector("#board")

for(let i = numberOfSquares ** 2; i>0; i--) {
  const div = document.createElement('div');
  div.classList.add('grid')
  board.appendChild(div)
}

document.querySelectorAll('.grid').forEach(square =>
  square.addEventListener("mouseover", e =>
    e.target.classList.add('selected'))
)

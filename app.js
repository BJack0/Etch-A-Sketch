console.log("Hello World")

const gridSizerBtn = document.querySelector("#gridSizer")

const gridContainer = document.querySelector("#gridContainer")

function createDivSquares(gridSize) {
   for (let i = 0; i < (gridSize * gridSize); i++) {
   let div = document.createElement("div")
   div.className = "tile"
   gridContainer.appendChild(div)
   }
}

createDivSquares(16)

function draw() {
   const tiles = document.querySelectorAll('.tile')

tiles.forEach((tile) => {

   tile.addEventListener('mouseover', () => {
   tile.className = "coloredIn"
  })
})
}

draw()

function gridSizePrompt() {
   gridSize = prompt("Please select a grid size", "16")
   gridSize = parseInt(gridSize)

   if (gridSize === null) {
      return
   }
   
   if (typeof gridSize !== "number") {
      alert("Please enter a number")
      gridSizePrompt()
      return
   }

   if (gridSize > 100) {
      alert("Max grid size is 100")
      gridSizePrompt()
      return
   }
}

function clearGrid() {
   var tiles = document.querySelectorAll('.tile');

   tiles.forEach(tile =>{
   tile.remove()
   })
   
   var colors = document.querySelectorAll('.coloredIn');

   colors.forEach(color =>{
   color.remove()
})
}

function updateGrid() {
   document.getElementById("gridContainer").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
   document.getElementById("gridContainer").style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
}

gridSizerBtn.addEventListener('click', () => {
   gridSizePrompt()
   clearGrid()
   updateGrid()
   createDivSquares(gridSize)
   draw()
})
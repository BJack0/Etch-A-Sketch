console.log("Hello World")

const gridSizerBtn = document.querySelector("#gridSizer")

const gridContainer = document.querySelector("#gridContainer")

function createDivSquares() {
   for (let i = 0; i < 256; i++) {
   let div = document.createElement("div")
   div.className = "tile"
   gridContainer.appendChild(div)
   }
}

createDivSquares()

const tiles = document.querySelectorAll('.tile')

tiles.forEach((tile) => {

   tile.addEventListener('mouseover', () => {
   tile.className = "coloredIn"
  })
})

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

function updateGrid() {
   document.getElementById("gridContainer").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
   document.getElementById("gridContainer").style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
}

gridSizerBtn.addEventListener('click', () => {
   gridSizePrompt()
   updateGrid()
})
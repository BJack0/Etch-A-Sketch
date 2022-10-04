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
   let gridsize = prompt("Please select a grid size", "16")
   gridsize = parseInt(gridsize)

   if (gridsize === null) {
      return
   }
   
   if (typeof gridsize !== "number") {
      alert("Please enter a number")
      gridSizePrompt()
      return
   }

   if (gridsize > 100) {
      alert("Max grid size is 100")
      gridSizePrompt()
      return
   }
}

gridSizerBtn.addEventListener('click', () => {
   gridSizePrompt()
  })
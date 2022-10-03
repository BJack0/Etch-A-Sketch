console.log("Hello World")

const gridContainer = document.querySelector(".gridContainer")



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
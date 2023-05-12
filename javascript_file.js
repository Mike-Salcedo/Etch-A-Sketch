// Trying to make 16*16 grids

const gridBox = document.querySelector(".gridBox");
let secondGridBox;
let smallGrids;
const gridDimensions = prompt("what size of a grid do you want");
// Issue #1 It's only making 2 divs need to figure out what I'm doing wrong.
// Figured it out the append needs to be inside the for loop.

//Issue #2 Trying make the grids with two for loops one inside another if this doesn't work break them up.
// Worked perfectly made the first group then the smaller grids inside the secondGridBox

function createGrid(gridSize = gridDimensions) {
  for (let i = 0; i < gridSize; i++) {
    secondGridBox = document.createElement("div");
    secondGridBox.classList.add("secondGridBox");
    gridBox.appendChild(secondGridBox);
    for (let j = 0; j < gridSize; j++) {
      smallGrids = document.createElement("div");
      smallGrids.classList.add("smallGrids");
      secondGridBox.appendChild(smallGrids);
    }
  }
}

createGrid(); // Calling the function works perfectly and makes the grid.

// Trying to make it so my .small grids change color when my mouse goes over them.

function changeSmallGridsColor() {
  smallGrids.classList.add("newColor");
}






/// Second Section using the eraser button to test it out until i figure out how to use the range slider

// const eraser = document.querySelector(".eraser");

// eraser.addEventListener("Onclick", createGrid());

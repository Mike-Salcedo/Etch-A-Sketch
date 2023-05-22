// Trying to make 16*16 grids

// Issue #1 It's only making 2 divs need to figure out what I'm doing wrong.

// Solution #1 Figured it out the append needs to be inside the for loop.

// Issue #2 Trying make the grids with two for loops one inside another if this doesn't work break them up.

// Solution #2 Worked perfectly made the first group then the smaller grids inside the secondGridBox

// Issue #3 When clicking on the button to make the grid it makes a new one on top of the old one looking weird need to fix the issue so it deletes the old one and keeps the new requested grid layout. //

// Solution #3 Added >>> gridBox.textContent = ""; <<< to update the grid box to blank every time the function is called.

const gridBox = document.querySelector(".gridBox");
let secondGridBox = document.createElement("div");

let smallGrids = document.createElement("div");

const createGrid = () => {
  gridBox.textContent = ""; // Deletes the previous grid.

  const gridSize = prompt("what size of a grid do you want? 1 - 100");
  if (gridSize > 100) {
    alert("Only from 1 to 100");
  } else if (gridSize <= 100) {
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

  addColorToDiv();
};

const createGridButton = document.querySelector(".createGridButton");

// For this to work when clicked on and for it to not fire right away you need to call the function without the () cause if you do createGrid() it's going to ask the user for the grid size without them clicking on the button //.

createGridButton.addEventListener("click", createGrid);

// createGrid(); // Calling the function works perfectly and makes the grid.

// Next Section:

// Dynamic color picker trying to use the color wheel to have the user pick the color they want to draw with.

// Trying to add color when the div is hovered over.

// Was able to work it out the addColorToDiv() function needs to be inside of the createGridFunction as a callback though but it's working

let colorChosen = document.querySelector("#colorChosen");

function addColorToDiv() {
  const color = document.querySelectorAll(".smallGrids");
  color.forEach((btn) =>
    btn.addEventListener(
      "mouseover",
      () => (btn.style.background = colorChosen.value)
    )
  );
}

// Clean the grid when clicking on a button but keeping current grid size

function clearGrid() {
  const clearGrid = document.querySelectorAll(".smallGrids");
  clearGrid.forEach((element) => (element.style.background = ""));
}

const clearGridButton = document.querySelector(".deleteGridButton");

clearGridButton.addEventListener("click", clearGrid);

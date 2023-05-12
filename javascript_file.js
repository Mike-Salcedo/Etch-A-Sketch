// Trying to make 16*16 grids

// Issue #1 It's only making 2 divs need to figure out what I'm doing wrong.
// Figured it out the append needs to be inside the for loop.

const gridBox = document.querySelector(".gridBox");
let secondGridBox;
let smallGrids;

//Issue #2 Trying make the grids with two for loops one inside another if this doesn't work break them up.
// Worked perfectly made the first group then the smaller grids inside the secondGridBox

function createSmallGrids() {
  for (let i = 0; i < 40; i++) {
    secondGridBox = document.createElement("div");
    secondGridBox.classList.add("secondGridBox");
    gridBox.appendChild(secondGridBox);
    for (let j = 0; j < 40; j++) {
      smallGrids = document.createElement("div");
      smallGrids.classList.add("smallGrids");
      secondGridBox.appendChild(smallGrids);
    }
  }
}

// createSmallGrids();

/// Second Section using the eraser button to test it out until i figure out how to use the range slider

const eraser = document.querySelector(".eraser");

eraser.addEventListener("click", createSmallGrids());

const container = document.querySelector(".container");
let numOfSquares = 16;


renderGrid(numOfSquares);

const button = document.querySelector("button");
button.addEventListener("click", e => {
  clearGrid();
  renderGrid(numOfSquares);
});

function clearGrid() {
  const boxes = document.querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i++) {
    container.removeChild(boxes[i]);
  }
  numOfSquares = parseInt(prompt("How many squares per side should the new grid be?", ""));
}

function renderGrid(num) {
  container.setAttribute("style", "grid-template: repeat(" + num +
                        ", 1fr) / repeat(" + num + ", 1fr);");
  for(let i=0; i < num; i++) {
    for(let j=0; j < num; j++) {
      const box = document.createElement("div");
      box.setAttribute("class", "box");
      box.style.width = `${960 / num}px`;
      box.style.height = `${960 / num}px`;
      container.appendChild(box);
    }
  }

  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.addEventListener("mouseover", e => {
      if (e.target.classList.contains("selected")) {
        let currentColor = e.target.style.background;
        let newColor = currentColor.replace("rgb", "");
        let newColor2 = newColor.replace("(", "");
        let rgbValues = newColor2.split(",");
        let red = parseInt(rgbValues[0]) * 0.9;
        let blue = parseInt(rgbValues[1]) * 0.9;
        let green = parseInt(rgbValues[2]) * 0.9;
        e.target.style.background = "rgb(" + red + ", " + blue + ", " + green + ")";
      } else {
        e.target.style.background = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        e.target.classList.add("selected");
      }
    });
  });
}
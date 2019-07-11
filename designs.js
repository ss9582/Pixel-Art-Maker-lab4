// Select color input

function pickCellColor() {
		this.style.backgroundColor = document.getElementById("colorPicker").value;
	}
 //add click events to cell
    const numOfCells = document.getElementsByClassName('cell');
    for (let i = 0; i < numOfCells.length; i++) {
        numOfCells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = pickCellColor.value;
        });
    }

// Select size and submit to call makeGrid()
function submitButtonClick()
{
	event.preventDefault();// Erase canvas by perventing the default value
	const gridHeight = document.getElementById('inputHeight').value;
	//console.log("gridhright" + gridHeight)
    const gridWidth = document.getElementById('inputWidth').value;
	//console.log("gridhright" + gridWidth)
	 makeGrid(gridHeight,gridWidth)
}
//create grid
function makeGrid(gridHeight,gridWidth) {
   event.preventDefault();  // Prevents default action of submitting form data to action
	const gridTable = document.getElementById("pixelCanvas");
	gridTable.innerText=""; //create empty table
	
	//console.log("gridTable" + gridTable)
    // loop over each grid row
    for (let gridRow = 0; gridRow < gridHeight; gridRow++) {
        const addRow = gridTable.insertRow(-1); 
        // loop for each grid cell
        for (let cellGrid = 0; cellGrid < gridWidth; cellGrid++) {
            const addCell = addRow.insertCell(-1);
			// Call function to change cell color when color is selected
			addCell.onclick=pickCellColor;
        }
      
    }
}

//on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function () {
  submitButtonClick();
};

//References:
//https://www.w3schools.com/jsref/met_document_getelementbyid.asp
//https://www.javatpoint.com/document-getElementById()-method
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://www.youtube.com/watch?v=OtSiwcq67j4
//https://github.com/jamalhassouni/Udacity-Pixel-Art-Maker/blob/master/js/index.js
//https://www.codeseek.co/Josipa_Tanocki_Varga/pixel-art-maker-udacity-assignment-jYGvyq
//
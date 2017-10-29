// Select color input


// Select size input
const heightInput = $("#input_height")[0];
const widthInput = $("#input_width")[0];

let pixelCanvas = $("#pixel_canvas")[0];

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit((e)=>{
    makeGrid();
    e.preventDefault();
});

function makeGrid() {
    const rows = heightInput.value;
    const cols = widthInput.value;

    $(".row").remove();
    for (let i = 0; i < rows; ++i) {
        let row_elem = pixelCanvas.insertRow(i);
        row_elem.setAttribute("class", "row");
        for (let j = 0; j < cols; ++j) {
            let cell= row_elem.insertCell(j);
        }
    }

}

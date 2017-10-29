// Select color input
const colorInput = $("#colorPicker")[0];

// Select size input
const heightInput = $("#input_height")[0];
const widthInput = $("#input_width")[0];

const pixelCanvas = $("#pixel_canvas")[0];

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit((e)=>{
    makeGrid();
    e.preventDefault();
});

function makeGrid() {
    const rows = heightInput.value;
    const cols = widthInput.value;

    const changeColor = function(e) {
        $(this).css("background", colorInput.value);
    }

    $(".row").remove();
    for (let i = 0; i < rows; ++i) {
        const row_elem = pixelCanvas.insertRow(i);
        row_elem.setAttribute("class", "row");
        for (let j = 0; j < cols; ++j) {
            const cell= $(row_elem.insertCell(j));
            cell.mousedown(changeColor);
        }
    }

}

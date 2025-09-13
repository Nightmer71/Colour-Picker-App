import React, {useState} from "react"

function ColourPicker(){

    const [colour, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
    <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: colour}}>
            <p>Selected Colour: {colour}</p>
        </div>
        <label>Select a Color: </label>
        <input type="color" value={colour} onChange={handleColorChange}/>
    </div>
    );
}

export default ColourPicker
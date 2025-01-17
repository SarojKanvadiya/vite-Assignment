import { useState } from "react"

export default function ColorSelectionForm(){

    const[selectColor, setSelectColor] = useState("Red")
    const [submitColor, setSubmitColor] = useState()

    function handleSubmit(e){
        e.preventDefault();
        console.log(submitColor)
       setSubmitColor(selectColor)

    }
    return (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h2>Select Your Favorite Color</h2>
        <div>
          <label><span>Select Color:</span>
          <select value={selectColor} onChange={(e)=>setSelectColor(e.target.value)}>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
          </label>
        </div>
        <div className="submit">
            <input type="submit" />
            </div>
        </form>
        {submitColor && <p><span>You selected:</span> {submitColor}</p>}
        </div>
    )
}
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        if (text.length > 0) { // Corrected condition
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase", "success");
        } else {
            props.showAlert("Enter something to convert", "danger");
        }
    }

    const handleLowClick = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to LowerCase", "success");
        } else {
            props.showAlert("Enter something to convert", "danger");
        }
    }
    const handleclear = () => {
        if (text.length > 0) {
            console.log("Uppercase was clicked");
            let newText = " ";
            setText(newText)
            props.showAlert("Text cleared", "success");
        } else {
            props.showAlert("Nothing to clear", "danger");
        }
    }

    const handleremovespace = () => {
        if (text.length > 0) {
            console.log("Uppercase was clicked");
            let newText = text.replace(/\s+/g, ' ').trim().toLowerCase();
            setText(newText)
            props.showAlert("Extra space removed", "success")
        } else {
            props.showAlert("Nothing to remove space", "danger");
        }
    }

    return (
        <>
            <div style={{
                color: props.mode === 'dark' ? 'white' : 'black',
                backgroundColor: props.mode == 'dark' ? '#1a3148' : 'white'

            }}>
                <div className='container' style={{
                    color: props.mode === 'dark' ? 'white' : 'black',
                }}>
                    <h1  >{props.heading}</h1>
                    <div className="mb-3" style={{
                        width: "1208px",
                        backgroundColor: props.mode == 'dark' ? '#1a3148' : 'white',

                        color: props.mode === 'dark' ? 'white' : 'black'
                    }}>
                        <textarea
                            name="form-control"
                            value={text}
                            onChange={handleOnChange}
                            id="myBox"
                            rows="4"
                            style={{
                                width: "1208px",
                                resize: "horizontal",
                                border: "1px solid",
                                backgroundColor: props.mode === 'dark' ? '#1a3148' : 'white',
                                color: props.mode === 'dark' ? 'white' : 'black'
                            }}
                        ></textarea>

                    </div >


                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleremovespace}>Remove extra space</button>



                </div>
                <div className="container my-3" style={{
                    color: props.mode == 'dark' ? 'white' : 'black'

                }}>
                    <h1 >Your Text summary</h1>
                    <p>{text.split(/\s+/).filter((element) => { return element.length != 0 }).length} words and {text.length} characters</p>
                    <p> Take {0.008 * text.split("").length} minutes to read</p>
                    <h2>Preveiw</h2>
                    <p>{text.length > 0 ? text : "Enter something in text box to preview"}</p>
                </div>
            </div>
        </>
    )
}

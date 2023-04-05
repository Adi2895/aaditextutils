import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = (event) => {
        
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length === 0) {
            props.showAlert("Please enter the text" , "danger");
        } else 
        props.showAlert("Convert to upper case." , "secondary"); 

    
    }

    const handleOnchange = (event) => {

        setText(event.target.value)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length === 0) {
            props.showAlert("Please enter the text" , "danger");
        } else
        props.showAlert("Changed to lower Case" , "info")
    }

    const handleAlterClick = () => {
        if(text.length === 0) {
            props.showAlert("Please enter the text" , "danger");
        } else
        props.showAlert("Successfully converted to AlTeRnAtInG text." , "success");
        let str = "";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                str += text[i];
            } else {
                str += text[i].toUpperCase();
            }
        }
        setText(str);
        
    }
    const handleClear = () => {
        setText("");
        if(text.length === 0) {
            props.showAlert("Please enter the text" , "danger");
        } else
        props.showAlert("Text Cleared" , "dark"); 
    }

    const handleCopy = () => {
        
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges(); 
        if(text.length === 0) {
            props.showAlert("Please enter the text" , "danger");
        } else
            props.showAlert("Text copied Successfully. " , "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[" "]+/);
        setText(newText.join(" "));
        if(text.length === 0) {
            props.showAlert("Please enter the text" , "danger");
        } else
        props.showAlert("Extra Space removed" , "danger"); 
    }


    const [text, setText] = useState("");
    // text = "ujidsfs"; not the correct way to give value
    // setText = ("fdnksdf"); correct way to give value


    return (
        <>
            <div className={`container`} >
                <h2 className="my-2 mb-2" style={{ color: props.mode === 'dark' ? 'black' : 'white' }}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'rgb(22 20 28 / 57%)' : 'white' , color: props.mode === 'light' ? 'white' : 'black' }} value={text} onChange={handleOnchange} id="myBox" rows="8" ></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'primary'} mx-1 my-1`} onClick={handleUpClick} >Convert to UPPER CASE</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'primary'} mx-1 my-1`} onClick={handleLoClick}>Convert to Lower case </button>
                <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'primary'} mx-1 my-1`} onClick={handleAlterClick}>aLtErNaTiNg cAsE</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'primary'} mx-1 my-1`} onClick={handleCopy}>Copy text</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'primary'} mx-1 my-1`} onClick={handleExtraSpaces}>Extra Space</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'danger'} mx-1 my-1`} onClick={handleClear}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'black' : 'white' }}>
                <h2> Your text summary </h2>
                <p>{text.split(" ").filter((ele)=>{return ele.length !== 0}).length} words and {text.length} Characters </p>               
                <p> {0.008 * text.split(/\s+/).length} Minutes to read</p>
                <h2>Preview</h2>
                <p> {text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>

    )
}

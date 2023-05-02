import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        
    }
    const handleClearClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        
    }
    const handleSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const handleCopy = ()=>{
        var text= document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter the text');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.headline}</h1>
            <div class="mb-3">
                <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark' ?'white': 'black'}} id="mybox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Connect to Uppercase</button> 
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Connect to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleSpace}>Remove Extra Space </button>


        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.lenght!==0}).length}Words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} mintues to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

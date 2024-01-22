import React, {useState} from "react";

export default function Textform(props) {
  const handleUpClick = ()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert(" Converted to Uppercase", "success")
  }
  const handleLowClick = ()=>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert(" Converted to Lowercase", "success")
  }
  const handleClearClick = ()=>{
    let newText='';
    setText(newText)
    props.showAlert(" Text Cleared", "success")
  }
  const handleonChange = (event)=>{
    setText(event.target.value)
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert(" Text Copied", "success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Cleared extra spaces", "success");
  } 
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleonChange}
          style={{backgroundColor:props.mode==='dark'?'#9d9a9a':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy to clipboard</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p> 
      <h3>Preveiw</h3>
      <p>{text.length>0?text:'Enter something to preveiw'}</p>
    </div>
    </>
  );
} 

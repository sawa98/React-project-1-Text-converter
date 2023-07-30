import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick =() =>{
    console.log("uppercase is clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handlelowClick =() =>{
    console.log("lowercase is clicked"+text);
    let newtext1=text.toLowerCase();
    setText(newtext1);
  }
  const handleOnChange =(event) =>{
    console.log("on chnage");
    setText(event.target.value);
  }
  

  const [text, setText]=useState("enter your paragraph");

  return (
    <>    <div  className='container'>
<div className="mb-3">
<h1>Enter Paragraph to Convert </h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="my_box" rows="10"></textarea>
</div>
<div className="row">
    <div className="col-sm-6">
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper-Case</button>
    </div>
    <div className="col-sm-6">
        <button className="btn btn-success" onClick={handlelowClick}>Convert to Small-Case</button>
    </div>
</div>
    </div>
    <div className='container my-3'>
    <h1>Your Text Summary</h1>
    <p>{text.split(' ').length} words and {text.length} characters</p>
    <p>{0.008*text.split(' ').length} minutes required to read</p>
    <h2>preview</h2>
    <p>{text}</p>
    </div>
    </>

  )
}

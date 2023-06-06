import React, {useState} from 'react'

export default function Textbox(props) {

    const handleUpClick = ()=> {
        console.log("Uppercase was clicked");
       let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=> {
       let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=> {
        let newText ="";
         setText(newText);
     }

    const handleOnChange = (event)=> {
        console.log("on change");
        setText(event.target.value);
    }

    const[text, setText] = useState('');

  return (
    <>
    <div className='container'>

        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>

<button className='btn btn-primary' onClick={handleUpClick}>To UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handleLowClick}>To LowerCase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>

    </div>

    <div className='container my-3'>
    <h1>Your Text Summary.</h1>
<p>{text.split(" ").length} Words and {text.length} characters.</p>
<p>{0.008 * text.split(" ").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text}</p>
    </div>
    </>
    

  )
}

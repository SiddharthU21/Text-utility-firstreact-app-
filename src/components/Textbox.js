import React,{useState} from 'react'


export default function Textbox(props) {
   const handleUpclick = () =>{
    // console.log( "" + text );
    let newtext = text.toUpperCase();   
    setText(newtext)
   }

   const handleLoclick = () =>{
    // console.log( "" + text );
    let newtext = text.toLowerCase();   
    setText(newtext)
   }

   const handleClclick = () =>{
    // console.log( "" + text );
    let newtext = '';   
    setText(newtext)
   }

   const capitalizeFirst = () => {
       let newtext = text.split(" ").map((firstvalue)=>{
        let format = ['~' , '`' , '!' , '@' , '#' , '$' , '%' , '^' , '&' , '*' , '(' , ')' , ';' , '-' , '.' , '_' , '=' , '{' , '}' , '|' , ',' , ':' , ';' , '<' , '>' , ',' , '?' , '+' , '1','2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0' , '"' , "'" ];
        //checking for special characters as first letter
         let i,newtext;
        for(i = 0 ; i <= format.length ; i++){
           if(firstvalue[0] === format[i]){
                 newtext = firstvalue;
           }
           else{
                 newtext = firstvalue[0].toUpperCase() + firstvalue.slice(1);
           }
        }
        return newtext;
       });
       setText(newtext.join(" "));
   }

   const removeSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
   }

   const handleonChange = (event) =>{
       setText(event.target.value)
    //    what on change does is the text var get updated every time you ('type' in this case) the event object passed can be used to take the onchange listened event and target it to textarea value which is text var)
   }
   
    const [text,setText] = useState(''); 
//    this is called state here text is the var whos value will be     changed and set text method will be used to change the state and the argument passed in the used state is default value of text var
    // text = 'New text'; this is the wrong way to change state
    // setText("New Text"); this is the right way to change state

    const countWords = (str) => {
        if(str === ''){           
            return 0;
        }
        else{
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");
        return str.split(' ').length;
        }
     }

   
    return (
            <>
            <div className="mb-2" style={{color : props.mode ==='dark'?'white':'black'}}>
                <h2 className="my-4">{props.heading}</h2>
                 <textarea className="form-control" style={{backgroundColor : props.mode ==='dark'?'#212529':'white',color : props.mode ==='dark'?'white':'black'}} value={text} onChange ={handleonChange}id="exampleFormControlTextarea1" rows="8" placeholder='Enter text here'></textarea>
                    <button disabled ={text.length===0} className="btn-primary btn mx-1 my-4" onClick={handleUpclick}>Convert to Uppercase</button>
                    <button disabled ={text.length===0} className="btn-primary btn mx-1 my-4" onClick={handleLoclick}>Convert to Lowercase</button>
                    <button disabled ={text.length===0} className="btn-primary btn mx-1 my-4" onClick={handleClclick}>Clear Text</button>
                    <button disabled ={text.length===0} className="btn-primary btn mx-1 my-4" onClick={capitalizeFirst}>Capitilize First Letter</button>
                    <button disabled ={text.length===0} className="btn-primary btn mx-1 my-4" onClick={removeSpaces}>Remove extra spaces</button>
            </div>
                 <div className="container my-1" style={{color : props.mode ==='dark'?  'white':'black'}}>
                     <h2> Your Text Summary</h2>
                     <p><em>{countWords(text)}</em>  words and <em>{text.length}</em> characters</p>
                     <h2>Preview</h2>
                     <p>{text}</p>
                 </div>
            </>
    )
}

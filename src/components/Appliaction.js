import React, { useState } from 'react'
export default function Form(props) {
    const [text, setText] = useState('');
    const onclickup = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const onclicklower = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const onclickcopy = () => {
        navigator.clipboard.writeText(text)
        setText('Copied!');
    }
    const onclickremovesp = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const onclickclear = () => {
        let newtext =(" ")
        setText(newtext)
    }
    function handleOnChange(event) {
        setText(event.target.value);
    }

    // settext = ("newtext")
    return ( <>
            <main className = 'lg:px-32 px-8 '>
                <div>
                    <h1 className = "text-3xl font-semibold "> Enter your text:</h1>  
                    <textarea style={{backgroundColor:props.mode==='black'?'#202525':'white', color:props.mode==='black'?'white':'black'}} placeholder = "Enter your text here" value = { text }onChange = { handleOnChange } className ='w-full  h-96 mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500' cols = "30" row ="10"> </textarea> 
                    <div className='grid md:grid-cols-5  grid-cols-2'>
                        <button disabled={text.length===0} onClick = { onclickup }    className = 'cursor-pointer mt-2     mx-1 sm:p-1 bg-green-500  rounded-md  text-gray-800 font-medium border-none outline-none  transition duration-300 hover:bg-green-400' > UpperCase </button> 
                        <button disabled={text.length===0} onClick = { onclicklower } className = 'cursor-pointer mt-2  mx-1 sm:p-1  bg-green-500  rounded-md  text-gray-800 font-medium border-none outline-none transition duration-300  hover:bg-green-400' > LowerCase </button>   
                        <button disabled={text.length===0} onClick = { onclickcopy } className = 'cursor-pointer mt-2  mx-1 sm:p-1  bg-green-500  rounded-md  text-gray-800 font-medium border-none outline-none transition duration-300  hover:bg-green-400' > Copy text</button>   
                        <button disabled={text.length===0} onClick = { onclickremovesp } className = 'cursor-pointer mt-2  mx-1 sm:p-1  bg-green-500  rounded-md  text-gray-800 font-medium border-none outline-none transition duration-300  hover:bg-green-400' > Remove Extra Spaces</button>   
                        <button disabled={text.length===0} onClick = { onclickclear } className ='cursor-pointer mt-2   mx-1 sm:p-1 bg-green-500  rounded-md  text-gray-800 font-medium border-none outline-none  transition duration-300 hover:bg-green-400' > Clear </button>   
                    </div>
                    <h1 className = "text-2xl mt-5" > Text Summary: </h1> 
                    <p className = 'my-5 text-sm' > Words: {text.split(" ").filter((element)=>{return element.length!==0}).length } Characters: { text.length } </p> 
                </div> 
            </main> 
        </>
    )
}
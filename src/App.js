import React, {useState} from 'react'
import Application from './components/Appliaction'
import Nav from './components/Nav';


function App(_props) {



const [mode, setMode] = useState("white")
  function toggleMode() {
    if (mode === 'white') {
      setMode('black');
     document.body.style.backgroundColor = "#202525"
     document.body.style.color = "white"

    }
    else {
      setMode("white");
    document.body.style.backgroundColor = "white"
   document.body.style.color = "black"

    }
  }  

 


  return ( 
  <>
  <div>
    <Nav  mode={mode} toggleMode={toggleMode} />
    <Application mode={mode} toggleMode={toggleMode} />
  </div>
  </>
  );
}

export default App;
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {


  const [selected, setSelected] = useState([]);
    useEffect(() => {
      fetch('/data',()=>{
        console.log(' 성공 ')
      })
      return () => {
       
      }
    }, [])
    

  return (
    <div className="App">
        도지은 바보 
    </div>
  );
}

export default App;

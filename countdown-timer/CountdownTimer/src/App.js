import React, {useState, useEffect} from "react";
import './App.css';

const App = () => {
  const [time, setTime]=useState(0);

  const handleChange = (event) =>{
    setTime(event.target.value);
  }
  useEffect(()=>{
   
    time > 0 && setTimeout(()=>setTime(time-1),1000);
   
  },[time]);

  return (
    <div className="App">
      <input type="number" id="number" onKeyDown={handleChange} />
      <div>Countdown: {time}</div>
    </div>
  )
}
 

export default App;

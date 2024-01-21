
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Closing from './Components/Closing';
import ClosingNight from "./Components/ClosingNight";




function App() {


  const [color, setColor] = useState("black");
  const [data, setData] = useState([]);

  const BACKEND = 'https://backend.rmf.manucasanova.com'

  useEffect(() => {
    axios.get(`${BACKEND}/data`)
      .then(function (res) {
        
        setData([...res.data])

      })
  }, [])



  //  console.log("data", data)

  // console.log("color app js", color)

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // or display a loading spinner, etc.
  }


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Closing color={color} setColor={setColor} data={data} setData={setData}/>}></Route>
          <Route exact path="/closing" element={<Closing color={color} setColor={setColor} data={data} setData={setData}/>}></Route>
          <Route exact path="/night" element={<ClosingNight color={color} setColor={setColor} data={data} setData={setData}/>}></Route>
        </Routes>
      </Router>



    </>


  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Closing from './Closing';
import ClosingNight from "./ClosingNight";




function App() {


  const [color, setColor] = useState("black");
  const [data, setData] = useState([]);



  useEffect(() => {
    axios.get(`http://localhost:8001/data`)
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

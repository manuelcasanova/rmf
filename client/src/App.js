
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import ClosingAM from './Components/ClosingAM';
import ClosingPM from "./Components/ClosingPM";
import FrontPage from "./Components/FrontPage";




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
          <Route exact path="/" element={<FrontPage />}></Route>
          <Route exact path="/am" element={<ClosingAM color={color} setColor={setColor} data={data} setData={setData}/>}></Route>
          <Route exact path="/pm" element={<ClosingPM color={color} setColor={setColor} data={data} setData={setData}/>}></Route>
        </Routes>
      </Router>



    </>


  );
}

export default App;

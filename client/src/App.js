
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Closing from './Closing';
import ClosingNight from "./ClosingNight";



function App() {


  const [color, setColor] = useState("black")

  // console.log("color app js", color)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Closing color={color} setColor={setColor} />}></Route>
          <Route exact path="/closing" element={<Closing color={color} setColor={setColor} />}></Route>
          <Route exact path="/night" element={<ClosingNight color={color} setColor={setColor} />}></Route>
        </Routes>
      </Router>



    </>


  );
}

export default App;

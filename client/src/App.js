
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContextProvider from './contexts/AppContext';
import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import ClosingAM from "./components/ClosingAM";
import ClosingPM from "./components/ClosingPM";
import FrontPage from './components/FrontPage';



function App() {


  const [color, setColor] = useState("black");
  const [data, setData] = useState([]);

  // const BACKEND = 'https://backend.rmf.manucasanova.com'
  const BACKEND = 'http://localhost:3500'

  useEffect(() => {
    axios.get(`${BACKEND}/data`)
      .then(function (res) {

        setData([...res.data])

      })
  }, [])


  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<FrontPage />}></Route>
          <Route exact path="/am" element={<ClosingAM color={color} setColor={setColor} data={data} setData={setData} />}></Route>
          <Route exact path="/pm" element={<ClosingPM color={color} setColor={setColor} data={data} setData={setData} />}></Route>
        </Routes>
      </Router>
    </AppContextProvider>





  );
}

export default App;

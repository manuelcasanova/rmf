
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Closing from './Closing';
import ClosingNight from "./ClosingNight";



function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Closing />}></Route>
          <Route exact path="/closing" element={<Closing />}></Route>
          <Route exact path="/night" element={<ClosingNight />}></Route>
        </Routes>
      </Router>



    </>


  );
}

export default App;

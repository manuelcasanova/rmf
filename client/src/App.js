
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Closing from './Closing';

function App() {




  return (
    <>
 <Router>
  <Routes>
  <Route exact path="/" element={<Closing />}></Route>
    <Route exact path="/closing" element={<Closing />}></Route>
  </Routes>
 </Router>

   

    </>


  );
}

export default App;

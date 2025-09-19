
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContextProvider from './contexts/AppContext';
import './App.css';

import ClosingAM from './Components/ClosingAM';
import ClosingPM from './Components/ClosingPM';
import FrontPage from './Components/FrontPage';



function App() {


  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<FrontPage />}></Route>

          
          {/* <Route exact path="/" element={<ClosingAM />}></Route> */}
          <Route exact path="/am" element={<ClosingAM />}></Route>
          <Route exact path="/pm" element={<ClosingPM />}></Route>

{/* Old URL shared with staff */}

          <Route exact path="/closing" element={<ClosingAM />}></Route>

        </Routes>
      </Router>
    </AppContextProvider>





  );
}

export default App;

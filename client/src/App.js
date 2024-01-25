
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContextProvider from './contexts/AppContext';
import './App.css';
import ClosingAM from "./components/ClosingAM";
import ClosingPM from "./components/ClosingPM";
import FrontPage from './components/FrontPage';



function App() {


  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<FrontPage />}></Route>
          <Route exact path="/am" element={<ClosingAM />}></Route>
          <Route exact path="/pm" element={<ClosingPM />}></Route>
        </Routes>
      </Router>
    </AppContextProvider>





  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Body from "./Body";

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="1/4">
          <Sidebar />
        </div>
        
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/dashboard" element={<div>dashboard Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </div>
 
    </Router>
  );
}

export default App;

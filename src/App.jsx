import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Body from "./Body";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <Router>
      <div className="flex w-full">
        {/* Sidebar Section */}
        <div className=" h-screen bg-blue-200">
          <Sidebar />
        </div>

        {/* Main Content Section */}
        <div className="w-screen h-screen">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<div>Contact Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

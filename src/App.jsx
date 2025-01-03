import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Body from "./Body";
import Dashboard from "./components/dashboard/dashboard";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="flex w-full h-screen">
        {/* Sidebar Section */}
        <div className="h-screen bg-blue-200">
          <Sidebar />
        </div>

        {/* Main Content Section */}
        <div className="flex-1 h-screen overflow-x-hidden">
          {/* Fixed Header */}
          <Header className="fixed top-0 left-0 w-full z-10" /> {/* Header fixed at the top */}
          
          {/* Main Content */}
          <div className="pt-16 overflow-auto"> {/* Add pt-16 for the header */}
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/report" element={<div>Contact Page</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

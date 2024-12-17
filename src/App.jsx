import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex ">
      {/* Sidebar with 1/3 width */}
      <div className="1/4">
        <Sidebar />
      </div>

      {/* Main content area */}
     <div>main content</div>
    </div>
  );
}

export default App;

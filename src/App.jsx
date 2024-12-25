import "./App.css";
import Body from "./Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex ">
      <div className="1/4">
        <Sidebar />
      </div>
    
      <Body></Body>
    </div>
  );
}

export default App;

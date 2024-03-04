import { Routes, Route } from "react-router-dom";
import Body from "./components/Body.jsx";
import NavbarContent from "./components/Navbar/NavbarContent.jsx";

function App() {
  return (
    <div className="App">
      <NavbarContent />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;

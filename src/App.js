import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import VSM from "./pages/VSM";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/telemedicine" element={<Home />} />
        <Route path="/vsm" element={<VSM />} />
      </Routes>
    </div>
  );
}

export default App;

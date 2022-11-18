import Home from "./pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import VSM from "./pages/VSM";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telemedicine" element={<Home />} />
          <Route path="/vsm" element={<VSM />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

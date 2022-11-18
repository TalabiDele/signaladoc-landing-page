import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import VSM from "./pages/VSM";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/vsm" element={<VSM />} />
          <Route path="/telemedicine" element={<Home />} />
          {/* <Route path="/vsm" element={<VSM />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

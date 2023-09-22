import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import Projects from "./pages/projects/projects";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

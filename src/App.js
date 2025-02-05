import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import EditorPage from "./pages/EditorPage";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/">Counter</Link>
          <Link to="/form">User Form</Link>
          <Link to="/editor">Rich Text Editor</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

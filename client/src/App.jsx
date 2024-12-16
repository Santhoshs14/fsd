import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css"; // Using index.css for global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Employee Management System</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© 2024 Employee Management System. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;

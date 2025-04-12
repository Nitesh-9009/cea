import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home.jsx";
import About from "./about.jsx";
import styles from "./app.module.css";

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>SIMPLE CEA</div>
          <ul className={styles.navLinks}>
            <li className={styles.menu}><Link to="/">Home</Link></li>
            <li className={styles.menu}><Link to="/about">About</Link></li>
          </ul>
        </nav>

        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
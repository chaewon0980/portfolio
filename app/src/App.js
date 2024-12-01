import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './routes/pages/Home.tsx';
import Resume from './routes/pages/Resume.tsx';
import Works from './routes/pages/Works.tsx';
import Contact from './routes/pages/Contact.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* URL이 "/"일 때 Home 컴포넌트 */}
          <Route path="/home" element={<Home />} />
          {/* URL이 "/resume"일 때 Resume 컴포넌트 */}
          <Route path="/resume" element={<Resume />} />
          {/* URL이 "/works"일 때 Works 컴포넌트 */}
          <Route path="/works" element={<Works />} />
          {/* URL이 "/contact"일 때 Contact 컴포넌트 */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

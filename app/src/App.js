import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './routes/pages/Home.tsx';
import Resume from './routes/pages/Resume.tsx';
import Works from './routes/pages/Works.tsx';
import Contact from './routes/pages/Contact.tsx';

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/resume", element: <Resume /> },
  { path: "/works", element: <Works /> },
  { path: "/contact", element: <Contact /> }
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

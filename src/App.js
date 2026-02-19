import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Research from "./pages/Research";
import Courses from "./pages/Courses";
// import Students from "./pages/Students";
import Service from "./pages/Service";
import Others from "./pages/Others";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      {/* Main Layout */}
      <div className="app-container">

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="main-content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/courses" element={<Courses />} />
            {/* <Route path="/students" element={<Students />} /> */}
            <Route path="/service" element={<Service />} />
            <Route path="/others" element={<Others />} />
          </Routes>

        </main>

        {/* Footer */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;

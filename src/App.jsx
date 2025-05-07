import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import Credit from "./components/Credit";
import FAQ from "./components/FAQ";
import Model from "./components/model";
import ClickSpark from "./components/ClickSpark";

import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Mission />
              <Credit />
              <FAQ />
            </>
          }
        />
        <Route path="/model" element={<Model />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Navbar />
      <AnimatedRoutes />
    </ClickSpark>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

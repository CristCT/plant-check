import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Analyzer, Dashboard, ImageProcessingManager } from './screens';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyzer" element={<Analyzer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/image-processing-manager"
          element={<ImageProcessingManager />}
        />
      </Routes>
    </Router>
  );
};

export default App;

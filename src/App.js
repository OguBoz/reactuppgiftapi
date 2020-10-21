import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;

import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ccom from './Components/Ccom';

export default class App extends Component {
  render() {


    return (
      <div>


        <Router>
          <Navbar />
          <Routes>
            <Route excat path="/" element={<Home text="Collleges" />} />
            <Route path="/Ccom" element={<Ccom />} />
           
          </Routes>
        </Router>
      </div>

    )
  }
}





import './App.css';

import Navbar from './COMPONENTS/Navbar';
import Body from './COMPONENTS/Body';
import About from './COMPONENTS/about';
import Services from './COMPONENTS/service';
import Testimonials from './COMPONENTS/testimonials';
import Contact from './COMPONENTS/contact';
import Footer from './COMPONENTS/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar />
     <Routes>
            <Route
              exact
              path="/"
              element={
                <Body
                
                key='home'
                />
              }
            />
            <Route
              exact
              path="/home"
              element={
                <Body
                
                key='home'
                />
              }
            />
            <Route
              exact
              path="/about"
              element={
               <About
               
              key='about'
               />
              }
            />
            <Route
              exact
              path="/services"
              element={
                <Services
                
                  key='services'
                />
              }
            />
            <Route
              exact
              path="/testimonials"
              element={
                <Testimonials
                
                  key='testimonials'
                />
              }
            />
            <Route
              exact
              path="/contact"
              element={
                <Contact
                
                  key='contact'
                />
              }
            />
     </Routes>
     <Footer />
    </Router>
    </>
  );
}

export default App;

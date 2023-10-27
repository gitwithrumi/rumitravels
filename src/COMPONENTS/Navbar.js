import React from "react";
import { Link } from "react-router-dom";

const Navbar=(props)=> {

  const handleCopy = () => {
    navigator.clipboard.writeText('rumitravels@gmail.com');
    alert('Copied to clipboard');
  };
  const handleCopy2 = () => {
    navigator.clipboard.writeText('03343871030');
    alert('Copied to clipboard');
  };

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
           <Link className="navbar-brand mx-4" to="/">
            <img id="logo" src="https://img2.hocoos.com/cache/u/137967/114426/w-352/h-364/x-486/y-96/u/137967/114426/logo.png" style={{borderRadius:'50%'}} alt="Rumi@Travels" width="50vw" height="48vw"/>
           </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                 <Link className="nav-link" id="home" aria-current="page" to="/home">
                    Home
                 </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" id="about" to="/about">
                    {" "}
                    About Us{" "}
                 </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" id="services" to="/services">
                    {" "}
                    Services{" "}
                 </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" id="testimonials" to="/testimonials">
                    {" "}
                    Testimonials{" "}
                 </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" id="contact" to="/contact">
                    {" "}
                    Contact Us{" "}
                 </Link>
                </li>
               
              </ul>
            </div>
            <div className="btn-group mx-1" id="btn-grp" style={{right:"0px"}}>
                <button type="button" className="btn dropdown-toggle" id="btn-drp" data-bs-toggle="dropdown" aria-expanded="false">
                 <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSagxePxIMtu2pkta6ZECP1dYj8XwdX0tzzsewrQTQUBM7NKf7f" width="25vw" alt="Mail"/>
                </button>
                <ul className="dropdown-menu">
                  <li><p className="dropdown-item" href="/" style={{color:'black'}} onClick={handleCopy}>rumitravels@gmail.com </p></li>
                  <li><p className="dropdown-item" href="/" style={{color:'black'}} onClick={handleCopy2}>03343871030</p> </li>
                </ul>
              </div>
              <Link to="/contact"> <button type="button" id="con-btn" className="btn btn-info btn-lg mx-4"> {" "} Contact Us {" "} </button></Link>
          </div>
        </nav>
      </div>
    );
  }

export default Navbar;
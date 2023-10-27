import React from 'react'
import { Link } from "react-router-dom";

function Services() {
  document.title="Rumi@Travels - Services"
  return (
    <div className='bg-info' style={{borderBottom:'20px solid black'}}>
        <div style={{paddingTop:'170px', paddingBottom:'50px', color:'white'}} >
          <div className=" container text-center">
          <h4 style={{fontFamily:'Arial'}} className='my-2'>Price List</h4>
          <p style={{color:'#0dcaf0', textDecoration:'underline', textDecorationColor:'white', textDecorationThickness:'5px'}}>l   i   i iii   ii      i   e </p>
          <h1 style={{fontSize:'48px', fontFamily:'Merienda'}} className='my-4'>Services</h1>
        <div className="row">
      <div style={{color:'white'}} id='tpp' className="col-md-10 my-5">
    <h3 className=" card-title my-3">Tour Package Planning</h3>
    <p className="card-text"><h6>Our tour package planning service helps you explore the world in style with custom-made itineraries and detailed travel advice.</h6>
    <br />
    <h4 style={{textDecoration:'underline'}}>250,000 PKR - 600,000 PKR</h4>
    <br />
    
    <Link to="/contact" id='book' className="btn btn-primary">BOOK NOW</Link>
    </p>
  </div>
      <div style={{ color:'white'}} id='hr' className="col-md-10 my-5">
    <h3 className=" card-title my-3">Hotel Reservation</h3>
    <p className="card-text"><h6>With us, customers can compare rates and book the best hotels for their upcoming trips quickly and securely.</h6>
    <br />
    <h4 style={{textDecoration:'underline'}}>125,000 PKR - 200,000 PKR </h4>
    <br />
    
    <Link to="/contact" id='book1' className="btn btn-primary">BOOK NOW</Link>
  </p>
  </div>
      <div style={{ color:'black'}} id='fb' className="col-md-10 my-5">
    <h3 className=" card-title my-3">
Flight Booking</h3>
    <p className="card-text"><h6>Get the best prices with our flight booking service, saving you time and money.</h6>
    <br />
    <h4 style={{textDecoration:'underline'}}>60,000 PKR - 130,000 PKR  </h4>
    <br />
    
    <Link to="/contact" id='book2' className="btn btn-primary">BOOK NOW</Link>
   </p>
     
  </div>
      <div style={{ color:'white'}} id='ct' className="col-md-10 my-5">

    <h3 className=" card-title my-3">Cultural Tours</h3>
    <p className="card-text"><h6>Visit amazing sites and attractions, and learn more about the local culture and customs from expert guides.</h6>
    <br />
    <h4 style={{textDecoration:'underline'}}>250,000 PKR - 500,000 PKR</h4>
    <br />
    
    <Link to="/contact" id='book3' className="btn btn-primary">BOOK NOW</Link>
  </p>
  </div>
      <div style={{ color:'black'}} id='st' className="col-md-10 my-5">
 
    <h3 className=" card-title my-3">Sightseeing Trips</h3>
    <p className="card-text"><h6>Enjoy unforgettable sightseeing trips to unique locations around the world.</h6>
    <br />
    <h4 style={{textDecoration:'underline'}}>100,000 PKR - 300,000 PKR </h4>
    <br />
    
    <Link to="/contact" id='book4' className="btn btn-primary">BOOK NOW</Link>
   </p>
     
  </div>
      <div style={{ color:'white'}} id='cr' className="col-md-10 my-5">

    <h3 className=" card-title my-3">Cruise Arrangement</h3>
    <p className="card-text"><h6>We can assist you with booking, payment and all the details of your cruise holiday.</h6>
    <br />
    <h4 style={{textDecoration:'underline'}}>500,000 PKR - 900,000 PKR  </h4>
    <br />
    
    <Link to="/contact" id='book5' className="btn btn-primary">BOOK NOW</Link>
  </p>
</div>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Services
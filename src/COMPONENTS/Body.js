import React from 'react'
import { Link } from "react-router-dom";

 const Body=()=> {
  document.title="Rumi@Travels - Home"
  const handleCopy1 = () => {
    navigator.clipboard.writeText('rumitravels@gmail.com');
    alert('Copied to clipboard');
  };
  const handleCopy2 = () => {
    navigator.clipboard.writeText('rumihassaan@gmail.com');
    alert('Copied to clipboard');
  };
  const handleCopy3 = () => {
    navigator.clipboard.writeText('hamzaroomi97@gmail.com');
    alert('Copied to clipboard');
  };
  const handleCopy4 = () => {
    navigator.clipboard.writeText('03343871030');
    alert('Copied to clipboard');
  };
  const handleCopy5 = () => {
    navigator.clipboard.writeText('03340295774');
    alert('Copied to clipboard');
  };
  const handleCopy6 = () => {
    navigator.clipboard.writeText('03343107014');
    alert('Copied to clipboard');
  };
  return (
  <div className='bg-dark' style={{borderBottom:'20px solid black',color:'white'}} >
    <div  style={{paddingTop:'100px', paddingBottom:'50px'}} >
      <div id="heading" style={{ borderBottom:'20px solid black'}}>
      <div style={{textAlign:'center', color:'black'}}>
        <h1 id='mainheading'>Travel with RUMI@TRAVELS</h1>
        <h4 className='container my-5' id='subheading'><b><i>Choose a trusted partner in travel for all your journey needs. Our experienced and caring staff will help you plan your dream vacation, providing high quality service for domestic and international destinations. We provide special offers and packages to accommodate any budget and timeframe. Let our experts make sure that every moment of your trip is memorable!</i></b></h4>
        </div>
        <div className='text-center' style={{paddingTop:'30px'}} >
    <Link to="/about" className='mx-3' ><button id='bbd' type="button" className="btn btn-primary">LEARN MORE</button></Link>
    
    <Link to="/contact" className='mx-3' ><button id='bbc' type="button" className="btn btn-info">BOOK NOW</button></Link>
    </div>
    </div>
    <div style={{ borderBottom:'20px solid black', paddingBottom:'50px'}}  >
   <div className="container" style={{paddingTop:'50px'}} >
    <h4 className='my-3'>Explore Hidden Wonders in Exotic Destinations</h4>
    <h2 id='dvac' className='my-4'>Find Your Dream Vacation</h2>
    <h6>Welcome to RUMI@TRAVELS Agency! We understand that everyone wants something different out of a vacation, and at RUMI@TRAVELS we are here to help you find exactly what you're looking for. From experiencing the hustle and bustle of bustling big cities, or taking it slow on an exotic beach getaway - with our experienced team you can be sure your dream trip will come true. So let us make your travel dreams a reality today!
</h6>
</div></div>
   <div className="container" style={{textAlign:'center', paddingTop:'50px', paddingBottom:'70px'}}>
    <h2 id='os' className='text-info my-3'>Our Services</h2>
    <h6 className='my-4'>All our services are available for you!</h6>
    <div className="row">
      <div className="col-md-3">
    <div style={{borderColor:'#212529', marginBottom:'10px'}} className="card">
  <img src="https://img2.hocoos.com/cache/u/137967/114426/w-362/h-224/x--2/y-2/ww-410/wh-255/u/137967/114426/murree%20img.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Tour Package Planning</h5>
    <p className="card-text">See the sights and sounds of Pakistan with our amazing Tour Package Planning service from our trusted travel agency!
    <br />
    <br />
    <h5> <b> 250,000 PKR  </b> </h5></p>
    <Link to="/contact" className="btn btn-info" id="tour">BOOK NOW</Link>
    </div>
   </div>
  </div>
      <div className="col-md-3">
    <div style={{borderColor:'#212529', marginBottom:'10px'}} className="card" >
  <img src="https://img2.hocoos.com/cache/u/137967/114426/w-800/h-497/x-0/y-23/ww-410/wh-255/u/137967/114426/burjalswathotel-1556544463.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hotel Reservation</h5>
    <p className="card-text">Take your next trip with confidence – enjoy the best hotels across Pakistan with our travel agency!
    <br />
    <br />
    <h5> <b>125,000 PKR </b> </h5></p>
    <Link to="/contact" className="btn btn-info" id="tour1">BOOK NOW</Link>
    </div>
   </div>
  </div>
      <div className="col-md-3">
    <div style={{borderColor:'#212529', marginBottom:'10px'}} className="card" >
  <img src="https://img2.hocoos.com/cache/u/137967/114426/w-966/h-601/x-36/y--1/ww-410/wh-255/u/137967/114426/ATR-in-Gilgit-Airport-jpg.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Flight Booking</h5>
    <p className="card-text">Our experienced travel agency provides effortless flight booking and a comfortable experience.
    <br />
    <br />
    <h5> <b>60,000 PKR </b> </h5></p>
    <Link to="/contact" className="btn btn-info" id="tour2">BOOK NOW</Link>
    </div>
   </div>
  </div>
      <div className="col-md-3">
    <div style={{borderColor:'#212529'}} className="card" >
  <img src="https://img2.hocoos.com/cache/u/137967/114426/w-1042/h-648/x-0/y-0/ww-410/wh-255/u/137967/114426/Splendour-of-the-Seas.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Cruise Arrangement</h5>
    <p className="card-text">Make the most of your journey with our travel agency's cruise arrangement services, designed to give you the ultimate party experience.
    <br />
    <br />
    <h5> <b>900,000 PKR </b> </h5></p>
    <Link to="/contact" className="btn btn-info" id="tour3">BOOK NOW</Link>
    </div>
   </div>
  </div>
</div>
</div>
<div style={{  borderTop:'20px solid black'}}>
<div style={{marginTop:'80px', paddingBottom:'70px'}} className="container">
        <div className="row">
        <div className="col-md-4">
          <h1 id='question' className='text-info'><i>Have a question?</i></h1>
          <br />
          <h5 className='my-2' style={{color:'white'}}>Contact us whenever you have any questions. We are always here for you!</h5>
        </div>
        <div style={{color:'white'}} className="col-md-4 my-3 px-5">
        <h3 className='text-info' style={{textDecoration:'underline'}}>Email</h3>
        <h5 href="/" className='link' onClick={handleCopy1}>rumitravels@gmail.com</h5>
        <h5 href="/" className='link' onClick={handleCopy2}>rumihassaan@gmail.com</h5>
        <h5 href="/" className='link' onClick={handleCopy3}>hamzaroomi97@gmail.com</h5>
        <br />
        <h3 className='text-info' style={{textDecoration:'underline'}}>Phone</h3>
        <h5 className='link' onClick={handleCopy4}>03343871030</h5>
        <h5 className='link' onClick={handleCopy5}>03340295774</h5>
        <h5 className='link' onClick={handleCopy6}>03343107014</h5>
        <br />
        <h3 className='text-info' style={{textDecoration:'underline'}}>Address</h3>
        <h5 id='address'>Zeeshan Super Luxury Apartment, Block 13 Gulistan-e-Johar, Karachi, Pakistan</h5>
        </div>
        <div className="col-md-4 my-2">
          <h3 className='text-info' id='ff'>Fill the form and submit to contact us</h3>
          <br />
          <form action="" style={{border:'1px solid lightblue', textAlign:'center'}}>
          <br /><br />
          <div id="form">
            <textarea cols="30" className='textarea' placeholder='First Name' required rows="1"></textarea><br /><br />
            <textarea cols="30" className='textarea' placeholder='Last Name' rows="1"></textarea><br /><br />
            <textarea cols="30" className='textarea' placeholder='Email Address*' required rows="1"></textarea><br /><br />
            <textarea cols="30" className='textarea' placeholder='Phone' rows="1"></textarea><br /><br />
            <textarea cols="30" className='textarea' placeholder='Notes ( If Essential )' rows="1"></textarea>
            <br /><br />
            <button type="submit" id='submit' className="btn btn-primary btn-lg" style={{marginLeft:'5px'}}> SUBMIT </button>
            <br /><br />
            </div>
          </form>

        </div>
        </div>
        </div>
        </div>


    </div>
  </div>
   
  )
}

export default Body

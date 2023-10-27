import React from 'react'

function Testimonials() {
  document.title="Rumi@Travels - Testimonials"
  return (
    <div className='bg-primary' style={{borderBottom:'20px solid black'}}>
      <div className='container text-center' style={{ paddingTop:'150px', paddingBottom:'50px', color:'white'}} >
      <h2 id='test' style={{ fontFamily:'Merienda'}} className='my-4'>Testimonials</h2>
      <h1 id='test1' style={{fontFamily:'Brush Script MT', color:'black'}} className='my-4'>What Our Clients Say About Us</h1>
          <p style={{color:'#0d6efd', textDecoration:'underline', textDecorationColor:'white', textDecorationThickness:'5px'}}>l   i   i iii   ii      i   e </p>
      <div>
        <h6 className='my-5'>
Our Travel Agency testimonials section is full of stories from customers around the world, sharing their amazing experiences and expressing their deep satisfaction with our services.
</h6>
<div className="row my-5">
  <div className="col-md-2">
    <img style={{borderRadius:'50%'}} width='140px' src="https://img2.hocoos.com/cache/img-pack/539/w-120/h-120/ww-120/wh-120/img-pack/539/yingchou-han-261533.jpg" alt="" />
  </div>
  <div className="col-md-2">
    <h3>David Smith</h3>
    <h5>Blogger</h5>
    <br />
    <h4>*****</h4>
  </div>
  <div className="col-md-7">
    <h5 style={{paddingTop:'20px'}}><q>This travel agency made planning our family trip stress-free and enjoyable!</q></h5>
  </div>
</div>
<div className="row my-5">
  <div className="col-md-2">
    <img style={{borderRadius:'50%'}} width='140px' src="https://img2.hocoos.com/cache/img-pack/539/w-120/h-120/ww-120/wh-120/img-pack/539/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg" alt="" />
  </div>
  <div className="col-md-2">
    <h3>Dina Maro</h3>
    <h5>HR Manager</h5>
    <br />
    <h4>*****</h4>
  </div>
  <div className="col-md-7">
    <h5 style={{paddingTop:'20px'}}><q>The trip planning process was a breeze with this travel agency - stress-free and enjoyable!</q></h5>
  </div>
</div>
<div className="row my-5">
  <div className="col-md-2">
    <img style={{borderRadius:'50%'}} width='140px' src="https://img2.hocoos.com/cache/img-pack/539/w-120/h-120/ww-120/wh-120/img-pack/539/william-stitt-119525-1024x889.jpg" alt="" />
  </div>
  <div className="col-md-2">
    <h3>William Brown</h3>
    <h5>English Teacher</h5>
    <br />
    <h4>*****</h4>
  </div>
  <div className="col-md-7">
    <h5 style={{paddingTop:'20px'}}><q>Using this travel agency for our family vacation made the process so easy and enjoyable!</q></h5>
  </div>
</div>
<div className="row my-5">
  <div className="col-md-2">
    <img style={{borderRadius:'50%'}} width='140px' src="https://img2.hocoos.com/cache/img-pack/539/w-120/h-120/ww-120/wh-120/img-pack/539/tanja-heffner-155367-1024x736.jpg" alt='no'/>
    </div>
  <div className="col-md-2">
    <h3>Emma Stone</h3>
    <h5>Student</h5>
    <br />
    <h4>****</h4>
  </div>
  <div className="col-md-7">
    <h5 style={{paddingTop:'20px'}}><q>This travel agency made organizing our family trip an absolute breeze!</q></h5>
  </div>
</div>
      </div>
      </div>
      <div className=" bg-dark text-center" style={{paddingTop:'40px', paddingBottom:'100px', color:'white'}}>
        <div className="container">
        <h2 id='test2' style={{fontFamily:'Merienda'}} className='text-info my-5'>Our clients</h2>
        <h6 className='my-5'>Our clients section is the perfect place to find out what makes our travel agency so special! Here, you can read through an array of glowing reviews from satisfied customers who have experienced amazing trips of a lifetime. From adventurous journeys to beachside escapes, let us help plan your dream holiday today!</h6>
        <div className="row my-5">
          <div className="col-md-2 my-2"> <img className='clients' src="https://img2.hocoos.com/cache/img-pack/539/w-160/h-160/ww-160/wh-160/img-pack/539/frame%20304.png" alt=""/> </div>
          <div className="col-md-2 my-2"> <img className='clients' src="https://img2.hocoos.com/cache/img-pack/539/w-160/h-160/ww-160/wh-160/img-pack/539/frame%20305.png" alt=""/> </div>
          <div className="col-md-2 my-2"> <img className='clients' src="https://img2.hocoos.com/cache/img-pack/539/w-160/h-160/ww-160/wh-160/img-pack/539/frame%20302.png" alt=""/> </div>
          <div className="col-md-2 my-2"> <img className='clients' src="https://img2.hocoos.com/cache/img-pack/539/w-160/h-160/ww-160/wh-160/img-pack/539/frame%20303.png" alt=""/> </div>
          <div className="col-md-2 my-2"> <img className='clients' src="https://img2.hocoos.com/cache/img-pack/539/w-160/h-160/ww-160/wh-160/img-pack/539/frame%20301.png" alt=""/> </div>
          <div className="col-md-2 my-2"> <img className='clients' src="https://img2.hocoos.com/cache/img-pack/539/w-160/h-160/ww-160/wh-160/img-pack/539/frame%20300.png" alt=""/> </div></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

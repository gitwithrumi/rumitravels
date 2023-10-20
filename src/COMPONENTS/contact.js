import React from 'react'

function Contact() {
  document.title="Rumi@Travels - Contact"
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
    <div className='bg-dark' style={{borderBottom:'20px solid black'}}>
      <div style={{paddingTop:'170px', paddingBottom:'120px'}} >
        <div className="container">
        <div className="row">
        <div className="col-md-4">
          <h1  style={{fontSize:'47px', fontFamily:'Merienda'}} className='text-info'><i>Have a question?</i></h1>
          <br />
          <h5 style={{color:'white'}}>Contact us whenever you have any questions. We are always here for you!</h5>
        </div>
        <div style={{color:'white'}} className="col-md-4 px-5">
        <h3 className='text-info' style={{textDecoration:'underline'}}>Email</h3>
        <h5><p href="/" className='link' onClick={handleCopy1}>rumitravels@gmail.com</p></h5>
        <h5><p href="/" className='link' onClick={handleCopy2}>rumihassaan@gmail.com</p></h5>
        <h5><p href="/" className='link' onClick={handleCopy3}>hamzaroomi97@gmail.com</p></h5>
        <br />
        <h3 className='text-info' style={{textDecoration:'underline'}}>Phone</h3>
        <h5 className='link' onClick={handleCopy4}>03343871030</h5>
        <h5 className='link' onClick={handleCopy5}>03340295774</h5>
        <h5 className='link' onClick={handleCopy6}>03343107014</h5>
        <br />
        <h3 className='text-info' style={{textDecoration:'underline'}}>Address</h3>
        <h5>Zeeshan Super Luxury Apartment, Block 13 Gulistan-e-Johar, Karachi, Pakistan</h5>
        </div>
        <div className="col-md-4">
          <h3 className='text-info' style={{color:'white'}}>Fill the form and submit to contact us</h3>
          <br />
          <form action="" style={{border:'1px solid lightblue', textAlign:'center'}}>
          <br /><br />
            <textarea cols="30" className='textarea' style={{padding:'10px'}} placeholder='First Name' required rows="1"></textarea><br /><br />
            <textarea cols="30" className='textarea' style={{padding:'10px'}} placeholder='Last Name' rows="1"></textarea><br /><br />
            <textarea cols="30" className='textarea' style={{padding:'10px'}} placeholder='Email Address*' required rows="1"></textarea><br /><br />
            <textarea cols="30" className='textarea' style={{padding:'10px'}} placeholder='Phone' rows="1"></textarea><br /><br />
            <textarea cols="30" className='textarea' style={{padding:'10px'}} placeholder='Notes ( If Essential )' rows="1"></textarea>
            <br /><br />
            <button type="submit" id='submit' className="btn btn-primary btn-lg" style={{marginLeft:'5px'}}> SUBMIT </button>
            <br /><br />
          </form>

        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

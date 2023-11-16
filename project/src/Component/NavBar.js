import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

const NavBar = () => {
  return (
    <div style={{alignItems:"space-between"}}>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="https://www.tradefairdates.com/logos/constructech_logo_1057.png" alt="Constructechx Logo" height="100"/>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <Link to="/" style={{marginRight: '20px'}}>Home</Link>
        <Link to="/about" style={{marginRight: '20px'}}>About</Link>
        <Link to="service" style={{marginRight: '20px'}}>Services</Link>
        <Link to="contact" style={{marginRight: '20px'}}>Contact Us</Link>
        <Link to="login" style={{marginRight: '20px'}}>Login</Link>
      </ul>
    </div>
    <div>  
      <form className='d-flex input-group w-auto mb-4' style={{display:'flex', justifyContent:'flex-end'}}>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
      </form>
     </div>
  </nav>
  </div>
  );
};
export default NavBar;
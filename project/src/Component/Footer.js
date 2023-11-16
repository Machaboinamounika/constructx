import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Footer() {
    return(
       <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with us on social networks:</span>
            </div>
    
            <div>
              <a href="https://www.facebook.com" className='btn text-white btn-floating m-1'>
                <MDBIcon color='Primary' fab icon='facebook-f' />
              </a>
              <a href="https://twitter.com/login" className='btn text-white btn-floating m-1'>
                <MDBIcon color='info' fab icon='twitter' />
              </a>
              <a href="https://accounts.google.com" className='btn text-white btn-floating m-1'>
                <MDBIcon color='danger' fab icon='google' />
              </a>
              <a href='https://www.instagram.com/accounts/login/' className='btn text-white btn-floating m-1'>
                <MDBIcon color='danger' fab icon='instagram' />
              </a>
              <a href="https://www.linkedin.com/login/" className='btn text-white btn-floating m-1'>
                <MDBIcon color='info' fab icon='linkedin' />
              </a>
              <a href="https://github.com/login"  className='btn text-white btn-floating m-1'>
                <MDBIcon  fab icon='github' />
              </a>
            </div>
          </section>
    
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                    Sign up for our newsletter
                  </h6>
                  <div class="container p-4 pb-0">
                    <form action="">
      
                     <div class="row">
                       <div class="col-auto mb-4 mb-md-0">
                       <p class="pt-2">
                       
                       </p>
                     </div>
      

        
        <div class="col-md-5 col-12 mb-4 mb-md-0">
          
          <div class="form-outline mb-4">
            <input type="email" id="form5Example25" class="form-control" />
            <label class="form-label" for="form5Example25">Email address</label>
          </div>
        </div>
      

        
        <div class="col-auto mb-4 mb-md-0">
        
          <button type="submit" class="btn btn-primary mb-4">
            Subscribe
          </button>
        </div>
      
      </div>
    </form>
  </div>
                </MDBCol>
    
                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      React
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Laravel
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' id="contact">Contact</h6>
                  <p>
                    <MDBIcon color='secondary' icon='home' className='me-2' />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2021 Copyright:
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>
      );
    }
export default Footer;
import React from 'react';
import { useState } from 'react';
import image1 from '../assets/loginpage.jpg';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

  
const Login = () =>{
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [userName, setUserName] = useState("");

    const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

  setJustifyActive(value);
};
    
    return(
        <div>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-55" id="login">
                <MDBCard>
                     <MDBRow className='g-0'>

                     <MDBCol md='6'>
                     <MDBCardImage src={image1} alt="login form" className='rounded-start w-100'/>
                     </MDBCol>

                    <MDBCol md='5'>
                    <MDBCardBody className='d-flex flex-column'>

                      <div>
                       <div className='d-flex flex-row mt-2'>
                        <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                         <span className="h1 fw-bold mb-0"x>Logo</span>
                       </div>
                          <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                       <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                       <MDBTabsItem>
                       <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                         User Login
                       </MDBTabsLink>
                       </MDBTabsItem>
                       <MDBTabsItem>
                       <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Contractor Login
                       </MDBTabsLink>
                       </MDBTabsItem>
                       </MDBTabs>
                      

                       <MDBTabsContent>

                       <MDBTabsPane show={justifyActive === 'tab1'}>

                        <div className="text-center mb-3">
                           <p>Sign in with:</p>

                           <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                            <MDBBtn tag='a' href="https://www.facebook.com" className='btn text-white btn-floating m-1'>
                            <MDBIcon fab icon='facebook-f' size="md" style={{ backgroundColor: '#3b5998' }}/>
                            </MDBBtn>

                            <MDBBtn tag='a' href="https://twitter.com/login" className='btn text-white btn-floating m-1' style={{ backgroundColor: '#55acee' }}>
                            <MDBIcon fab icon='twitter' size="md"/>
                            </MDBBtn>

                            <MDBBtn tag='a' href="https://accounts.google.com" className='btn text-white btn-floating m-1' style={{ backgroundColor: '#dd4b39' }}>
                            <MDBIcon fab icon='google' size="md"/>
                            </MDBBtn>

                            <MDBBtn tag='a' href="https://github.com/login" className='btn text-white btn-floating m-1'>
                            <MDBIcon fab icon='github' size="md" style={{ backgroundColor: '#333333' }}/>
                            </MDBBtn>
                           </div>

                             <p className="text-center mt-3">or:</p>
                        </div>
                        
                        
                        <MDBInput wrapperClass='mb-4' label='username' id='form1' type='text'/>
                        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

                        <div className="d-flex justify-content-between mx-4 mb-4">
                           <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                           <Link to="/forgotpassword"><a href="!#">Forgot password?</a></Link>
                        </div>

                        <MDBBtn className="mb-4 w-100">
                        <Link to="/dashboard" style={{ color: '#FFF' }}>Sign in</Link>
                      </MDBBtn>
                      <Link to="/register"><p className="text-center">Not a member? <a href="#!">Register</a></p></Link>

                       </MDBTabsPane>

                       <MDBTabsPane show={justifyActive === 'tab2'}>

                        <div className="text-center mb-3">
                          <p>Sign up with:</p>
                           <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                            <MDBBtn tag='a' href="https://www.facebook.com" color='none' className='btn text-white btn-floating m-1' style={{ color: '#1266f1' }}>
                             <MDBIcon fab icon='facebook-f' size="sm" style={{ backgroundColor: '#3b5998' }}/>
                            </MDBBtn>

                            <MDBBtn tag='a' href="https://twitter.com/login" color='none' className='btn text-white btn-floating m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='twitter' size="sm" style={{ backgroundColor: '#55acee' }}/>
                            </MDBBtn>
                            <MDBBtn tag='a' href="https://accounts.google.com" color='none' className='btn text-white btn-floating m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='google' size="sm" style={{ backgroundColor: '#dd4b39' }}/>
                            </MDBBtn>

                            <MDBBtn tag='a' href="https://github.com/login" color='none' className='btn text-white btn-floating m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='github' size="sm" style={{ backgroundColor: '#333333' }}/>
                            </MDBBtn>
                         </div>
                         </div>

                        <p className="text-center mt-3">or:</p>

                  <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
                  <MDBInput wrapperClass='mb-4' label='Specialized_in' id='form1' type='text'/>

                  <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                   </div>

                   <MDBBtn className="mb-4 w-100">
                   <Link to="/database" style={{ color: '#FFF' }}>Sign Up</Link>
                   </MDBBtn>

                </MDBTabsPane>

                </MDBTabsContent>
                </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </div>
    )
}
export default Login;

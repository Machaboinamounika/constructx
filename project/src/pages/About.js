import React from "react";
import { Row, Col, Card, CardBody } from "react-bootstrap";
import image1 from '../assets/about1.jpg'
import video1 from '../assets/video2.mp4'
import './about.css';
// import { Row } from "react-bootstrap";

const About = () => {
return (
  <Card style={{ padding: '20px', margin: 'auto', width:"80%", height:"80%" }}>
    <Card.Body>
    <div>
      <div>
        <Row style={{textAlign:'center'}}>
        <h1>About Us – Our Mission, Vision, and Team</h1>
        </Row>
      </div>
      <div>
        <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
            <Col>
              <img src={image1} alt="our mission"/>
            </Col>
            <Col style={{display:'flex',flexDirection: 'column', alignItems:"center"}}>
              <h2>Our Vision</h2>
              <p>Our vision is to keep every Construction Professional around the world updated by providing the right information and the right platform to gain and share knowledge, in-order-to make them competent for the benefit of the self and the world.</p>
            </Col>
        </Row>
      </div>
      <div>
        <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
            <Col style={{display:'flex',flexDirection: 'column', alignItems:"center", display:"-webkit-inline-flex"}}>
                <h2>Our Mission</h2>
                <p>
                We are a team of professionals who are dedicated to providing you with the best services in the industry. We have been in business since 2005 and have grown to become one of the leading providers of construction and renovation services in the country. Our team is made up of highly skilled professionals who are dedicated to providing you with the best services in the industry. We have been in business since 2005 and have grown to become one of the leading providers of construction and renovation services in the country.
                </p>
            </Col>
            <Col>
                <video className="video" controls>
                    <source src={video1} type="video/mp4"/>
                </video>
            </Col>
        </Row>
      </div>
      <div>
          <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
          <h2>About Us</h2>
             <p>
             The Constructor- Civil Engineering Home is an effort to make civil engineering and construction information resources available and accessible from anywhere anytime around the world
             </p>
             <p>
             Gopal Mishra founded The Constructor – Civil Engineering Home on 19th March 2009. It has been a marvelous 11 years of sharing information with all the construction professionals around the world, and we believe that we have just started.
             </p>
             <p>
             We have just crossed our first milestone and have hundreds of milestones to cross to achieve our vision and mission. Rest assured, we will not rest until we achieve them.
             </p>
             <p>
             The Constructor is a valuable civil engineering information resource for construction professionals and students around the globe which offer Articles, Guides, Books, Software Manuals, and other Downloads. Information, Articles, and Guides are categorized into sections. How To Guide deals with testing methods and practical applications at the site.
             </p>
             <p>
             Our goal is not just to create a blog but to spread a movement for better engineering and technology to help our society live a better life at a better and safer place and fulfill their needs for faster growth.
             </p>
          </Row>
      </div>
    </div>  
    </Card.Body>
  </Card>
    )
}

export default About;
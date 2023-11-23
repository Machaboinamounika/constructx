import React from "react";
import { Card, Button, Carousel, CardBody,Row, Col } from 'react-bootstrap';
import design1 from '../assets/design1.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import construction from '../assets/construction.jpg';
import renovation from '../assets/renovation.jpg';
import preconstruction from '../assets/construction.jpg';

// ...


const Service = () => {
  useEffect(() => {
    const element = document.getElementById(window.location.hash.substring(1));
    if (element) element.scrollIntoView();
  }, []);
  
return ( 
        <Card style={{ padding: '20px', margin: 'auto', width:"80%", height:"100%" }}>
        <CardBody>
        <div>
            <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
              <Col style={{display:'flex',flexDirection: 'column', alignItems:"center", display:"-webkit-inline-flex"}}>
                 <h2 style={{color:"royalblue"}} id="#designing">
                 Designing
                </h2>
                <p>
                Designing in the construction of houses involves creating a plan and layout for how the house will be built. This includes deciding on the size and shape of the house, the number and placement of rooms, and the type of materials to be used. The goal is to create a functional and aesthetically pleasing living space.
                </p>
                <p>
                The design process often starts with a site analysis to understand the constraints and opportunities presented by the plot of land. This includes factors like the slope of the land, the direction of sunlight, and the surrounding views.
                </p>
                <p>
                The next step is to create a floor plan that outlines the arrangement of rooms and spaces. This is a critical step as it determines the flow of the house and how the spaces relate to each other.
                </p>
                <p className="mb-3">
                Once the floor plan is finalized, the designer will then work on the elevation and section drawings which show the exterior look of the house and the vertical cut view of the house respectively. These drawings help to visualize the final look of the house and are also used for construction purposes.
                </p>
              </Col>
            </Row>
            <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
            <Col>
            <img src={design1} alt="our mission" style={{ width: '50%', height: '50%' }}/>
            </Col>
            </Row>  
        </div>
        <div>
            <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
               <Col style={{display:'flex',flexDirection: 'column', alignItems:"center", display:"-webkit-inline-flex"}}>
               <h2>
                Renovation
               </h2>
               <p>
                Renovation in the construction of houses involves updating and restoring the existing structures. This can range from minor updates like painting and reflooring, to major overhauls like tearing down walls and adding new rooms. The goal is to improve the functionality and aesthetics of the house, while often also increasing its market value.
               </p>
            <p>
            The renovation process often starts with a thorough inspection of the house to identify areas that need improvement. This includes checking the condition of the foundation, walls, roof, plumbing, electrical systems, and other major components of the house.
            </p>
            <p>
            Once the areas of improvement are identified, the next step is to create a renovation plan. This plan outlines the changes to be made, the materials to be used, and the estimated cost and timeline of the renovation. It's important to plan carefully to ensure that the renovation is cost-effective and aligns with the homeowner's needs and preferences.
            </p>
            <p className="mb-3">
            After the plan is finalized, the renovation work can begin. This often involves a team of professionals including architects, builders, plumbers, electricians, and interior designers. They work together to execute the renovation plan and transform the house according to the homeowner's vision.
            </p>
          </Col>
        </Row>
        <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
        <Col>
        <img src={renovation} alt="our mission" style={{ width: '50%', height: '50%' }}/>
        </Col>
        </Row>  
    </div>

    <div>
    <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
      <Col style={{display:'flex',flexDirection: 'column', alignItems:"center", display:"-webkit-inline-flex"}}>
      <h2>
      Construction
      </h2>
      <p>
      Construction in the context of houses involves the process of building the house from the ground up. This includes laying the foundation, erecting the walls, installing the roof, and finishing the interior. The goal is to create a safe, comfortable, and durable living space.
      </p>
      <p>
      The construction process often starts with site preparation, which includes clearing the land, setting out the house boundaries, and laying the foundation. The foundation is a critical part of the house as it supports the entire structure.
      </p>
      <p>
      Once the foundation is laid, the next step is to build the walls and install the roof. This forms the basic structure of the house. The walls are typically built with bricks or concrete blocks, while the roof can be made of various materials such as tiles, metal, or concrete.
      </p>
      <p>
      After the basic structure is complete, the interior of the house is finished. This includes installing the flooring, painting the walls, fitting the doors and windows, and installing the electrical and plumbing systems. The final step is to add the finishing touches like furniture and decorations to make the house a home.
      </p>
      </Col>
    </Row>
    <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
    <Col>
    <img src={construction} alt="our mission" style={{ width: '50%', height: '50%' }}/>
    </Col>
    </Row>  
</div> 
<div>
<Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
  <Col style={{display:'flex',flexDirection: 'column', alignItems:"center", display:"-webkit-inline-flex"}}>
  <h2>
  Pre Construction
  </h2>
  <p>
  Pre-construction is the first phase in the construction process and involves all the work done before actual construction begins. This includes tasks like obtaining necessary permits, conducting site surveys, creating detailed plans and blueprints, and estimating the cost of the project.
</p>
<p>
  One of the key tasks in the pre-construction phase is site analysis. This involves studying the plot of land where the house will be built to understand its characteristics and constraints. Factors like soil type, slope of the land, and local climate are taken into account during site analysis.
</p>
<p>
  Another important task is creating the design of the house. This involves working with architects and designers to create a plan and layout for the house. The design process includes deciding on the size and shape of the house, the number and placement of rooms, and the type of materials to be used.
</p>
<p>
  Once the design is finalized, the next step is to estimate the cost of the project. This involves calculating the cost of materials, labor, and other expenses. The goal is to create a realistic budget for the project that takes into account all possible costs.
</p>
  </Col>
</Row>
<Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
<Col>
<img src={preconstruction} alt="our mission" style={{ width: '50%', height: '50%' }}/>
</Col>
</Row>  
</div>


<div>
    <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
      <Col style={{display:'flex',flexDirection: 'column', alignItems:"center", display:"-webkit-inline-flex"}}>
      <h2>
      Maintanence
      </h2>
      <p>
  Maintenance in the context of houses involves the regular upkeep and repair of the house to ensure its longevity and livability. This includes tasks like painting, cleaning, repairing broken fixtures, and checking the plumbing and electrical systems.
</p>
<p>
  Regular maintenance is crucial to prevent minor issues from turning into major problems. For example, a small leak in the roof can lead to significant water damage over time if not repaired promptly.
</p>
<p>
  Maintenance tasks can be divided into routine maintenance, preventive maintenance, and corrective maintenance. Routine maintenance includes tasks that are done regularly, such as cleaning and painting. Preventive maintenance involves checking the house for potential issues and addressing them before they become problems. Corrective maintenance involves repairing any issues that have already occurred.
</p>
<p>
  Ultimately, regular maintenance helps to keep the house safe, comfortable, and aesthetically pleasing. It also helps to maintain the house's market value and can save money in the long run by preventing costly repairs.
</p>
      </Col>
    </Row>
    <Row style={{display:'flex', justifyContent:"center", textAlign:"center",alignItems:"center"}}>
    
    </Row>  
</div>
</CardBody>
</Card>
    
    )
}

export default Service;
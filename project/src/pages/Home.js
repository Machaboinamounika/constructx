import React from "react";
import SlideShows from "../Component/SlideShows";
import { Card, Button } from 'react-bootstrap';
import image1 from '../assets/service1.jpg';
import design1 from '../assets/design1.jpg';
import construction from '../assets/construction.jpg';
import renovation from '../assets/renovation.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
        <SlideShows/>
        <div className="container">
        <div className="aboutpage"><h1 id="about">About page</h1> </div>
        <div className="row">
        <div className="col">  
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Welcome to Constructechx</h5>
                <p className="card-text">Constructechx is a platform for construction technology professionals to connect, collaborate, and cultivate a community of like-minded individuals.</p>
                <Link to="/Learnmore"><a href="#" className="btn btn-primary">Learn More</a></Link>
                </div>
            </div> 
        </div>
        </div>
    <div className="services"><h1 id="service">Services</h1></div>
    <div className="position-relative" style={{display: "flex", direction: "row", padding:"1rem",margin:"50px", justifyContent: "space-evenly"}}>
        <Card style={{ width: '18rem', marginRight: '20px' }}>
            <Card.Img variant="top" src={design1} />
            <Card.Body>
                <Card.Title>Designing</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Link ><a href="#designing"><Button variant="primary">Go somewhere</Button></a></Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem', marginRight: '20px' }}>
            <Card.Img variant="top" src={renovation} />
            <Card.Body>
                <Card.Title>Renovation</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Link to="/renovation"><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem', marginRight: '20px' }}>
            <Card.Img variant="top" src={construction} />
            <Card.Body>
                <Card.Title>Construction</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Link to="/construction">
                        <Button variant="primary">Go somewhere</Button>
                </Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem', marginRight: '20px' }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
                <Card.Title>Pre Construction</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Link to="/preconstruction"><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem', marginRight: '20px' }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
                <Card.Title>Maintanence</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Link to="/maintenance"><a href=""><Button variant="primary">Go somewhere</Button></a></Link>
            </Card.Body>
        </Card>
         </div>
        </div>
      </div>    
    )
}
export default Home;
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Button, Row } from 'react-bootstrap';
import flats from '../assets/flats.webp';
import villa from '../assets/villa.webp';
import penthouse from '../assets/penthouse.jpg';
import manor from '../assets/manor-house.webp';
import duplex from '../assets/duplex.jpg';
import modern from '../assets/modern luxury penthouse.jpg';
import builder from '../assets/builderFloors.jpg';
import bungalow from '../assets/bungalow.jpg';
import operative from '../assets/co-operative-housing.webp';
import { Link } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const AfterLogin = () => {
    return (
      <div>
        <div>
        <h1 style={{ textAlign:'center'}}>what type of houses you want to Build?</h1>
            <Carousel responsive={responsive}>
                <div>
                  <Card style={{ width: '18rem', marginRight:'1rem', height:'35rem' }}>
                   <Card.Img variant="top" src={flats} style={{ width: '100%', height: '15rem' }} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>Flats or Apartment</Card.Title>
                      <Card.Text>
                      A flat (American English- Apartment) is a housing unit in a building owned by a single entity. A housing unit shares the wall with adjacent units, and it has a bedroom, kitchen, hall, bathroom, and toilet.
                      </Card.Text>
                      <Link to="/flats">
                      <Button variant="primary" className="mt-auto">More</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                <Card style={{ width: '18rem', marginRight:'1rem', height:'35rem' }}>
                <Card.Img variant="top" src={builder} style={{ width: '100%', height: '15rem' }}/>
                 <Card.Body className="d-flex flex-column">
                   <Card.Title>Builder Floors</Card.Title>
                   <Card.Text>
                   Builder floors are independent floors of a low-rise building, usually with one or two units on each floor. They offer a more private and personalized living experience.
                   </Card.Text>
                   <Button variant="primary" className="mt-auto">More</Button>
                 </Card.Body>
                </Card>
                </div>
                <div>
                <Card style={{ width: '18rem', marginRight:'1rem',height:'35rem' }}>
                <Card.Img variant="top" src={penthouse} style={{ width: '100%', height: '15rem' }} />
                 <Card.Body className="d-flex flex-column">
                   <Card.Title>PentHouses</Card.Title>
                   <Card.Text>
                   Penthouses are luxury units located on the top floor of a building. They often feature exclusive amenities like private elevators, larger balconies, and stunning views.
                   </Card.Text>
                   <Button variant="primary" className="mt-auto">More</Button>
                 </Card.Body>
                </Card>
                </div>
                <div>
                <Card style={{ width: '18rem', marginRight:'1rem', height:'35rem' }}>
                <Card.Img variant="top" src={duplex} style={{ width: '100%', height: '15rem' }} />
                 <Card.Body className="d-flex flex-column">
                   <Card.Title>Duplex</Card.Title>
                   <Card.Text>
                   Duplex houses consist of two separate living units within the same structure, each with its own separate entrance. They are a great option for those looking for a multi-family setup or an additional income source.
                   </Card.Text>
                   <Button variant="primary" className="mt-auto">More</Button>
                 </Card.Body>
                </Card>
               </div>
                <div>
                <Card style={{ width: '18rem', marginRight:'1rem', height:'35rem' }}>
                   <Card.Img variant="top" src={villa} style={{ width: '100%', height: '15rem' }} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>Villas</Card.Title>
                      <Card.Text>
                      Villas are standalone houses with their own plots of land. They often feature multiple bedrooms, a garden, and sometimes even a private pool, offering a luxurious and spacious living experience.
                      </Card.Text>
                      <Button variant="primary" className="mt-auto">More</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                <Card style={{ width: '18rem', marginRight:'1rem', height:'35rem' }}>
                   <Card.Img variant="top" src={bungalow} style={{ width: '100%', height: '15rem' }} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>Bungalow</Card.Title>
                      <Card.Text>
                      Bungalows are single-story houses, often with a large porch or veranda. They offer a compact and efficient layout, making them ideal for small families or individuals seeking a simpler lifestyle.
                      </Card.Text>
                      <Button variant="primary" className="mt-auto">More</Button>
                    </Card.Body>
                  </Card>
                  </div>
                <div>
                <Card style={{ width: '18rem', marginRight:'1rem', height:'35rem' }}>
                   <Card.Img variant="top" src={operative} style={{ width: '100%', height: '15rem' }}/>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>co-operative-Houses</Card.Title>
                      <Card.Text>
                      Co-operative houses are owned and managed by the residents, who each have a share in the cooperative corporation. This allows for democratic control, lower costs, and a sense of community among residents.
                      </Card.Text>
                      <Button variant="primary" className="mt-auto">More</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                <Card style={{ width: '18rem', marginRight:'1rem', height:'35rem' }}>
                <Card.Img variant="top" src={manor} style={{ width: '100%', height: '15rem' }} />
                 <Card.Body className="d-flex flex-column">
                   <Card.Title>Manor Houses</Card.Title>
                   <Card.Text>
                   Manor houses are large country homes that were historically the administrative center of a manor, the lowest unit of territorial organization in the feudal system. They often feature spacious rooms, expansive grounds, and classic architectural details.
                   </Card.Text>
                   <Button variant="primary" className="mt-auto">More</Button>
                 </Card.Body>
                </Card>
                </div>
                {/* ... add more items as needed ... */}
            </Carousel>
        </div>




       <br/>
       <br/>

       <h1 style={{justifyContent:"center", alignItems:"center", textAlign:'center'}}>Renovation</h1>
       <br/>
        
        <div>
          <Carousel responsive={responsive}>
             {/* ... existing carousel items ... */}
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body className="d-flex flex-column">
                <Card.Title>Manor Houses</Card.Title>
                <Card.Text>
                     Manor houses are large country homes that were historically the administrative center of a manor, the lowest unit of territorial organization in the feudal system. They often feature spacious rooms, expansive grounds, and classic architectural details.
                </Card.Text>
                <Button variant="primary" className="mt-auto">More</Button>
                </Card.Body>
              </Card>
            </div>
             {/* ... add more items as needed ... */}

            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body className="d-flex flex-column">
                <Card.Title>Manor Houses</Card.Title>
                <Card.Text>
                      Manor houses are large country homes that were historically the administrative center of a manor, the lowest unit of territorial organization in the feudal system. They often feature spacious rooms, expansive grounds, and classic architectural details.
                </Card.Text>
                <Button variant="primary" className="mt-auto">More</Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel>
          
  
        </div>
      </div>
    )
}

export default AfterLogin;
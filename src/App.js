import './App.css';
import { Button, Form, Container, Row, Col, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {/* Title Section */}
          <h1 className='amiibfo'> Amiibfo </h1>

          {/* Carousel Section */}
          <Row>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>

          {/* Search Form */}
          <Form>
            <Row>
              <Col xs={1}>
              </Col>
              <Col sm={6} className='my-3'>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control placeholder="Search by character name" />
                </Form.Group>
              </Col>
              <Col sm={3} className='my-3'>
                <div className='d-grid'>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Col>
              <Col xs={1}>
              </Col>
            </Row>
          </Form>
          
          {/* Amiibo display Section */}
          <Row>
            <Col xs={1}>
            </Col>
            <Col>
              Amiibo display location
            </Col>
            <Col xs={1}>
            </Col>
          </Row>


        </Container>

      </header>
    </div>
  );
}

export default App;


/*
To do-
Title card, form, button and amiibo display components
*/

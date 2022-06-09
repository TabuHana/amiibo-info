import './App.css';
import { Container, Row, Col, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Search from './components/Search';
import Showcase from './components/Showcase'

// https://amiiboapi.com/api/amiibo/?character=(character name)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {/* Title Section */}
          <Title />

          {/* Carousel Section */}
          <Showcase />

          {/* Search Form */}
          <Search />

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

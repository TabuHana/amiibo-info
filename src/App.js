import './App.css';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Search from './components/Search';
import Showcase from './components/Showcase';
import Display from './components/Display';

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
          <Display />


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

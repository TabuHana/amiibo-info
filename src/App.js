import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Title from './components/Title';
import Search from './components/Search';
import Showcase from './components/Showcase';
import Display from './components/Display';

import { useState } from "react";
// https://amiiboapi.com/api/amiibo/?character=(character name)

function App() {
  const [title, setTitle] = useState()

  //Search
  const searchAmiibo = (search) => {
    console.log(search.search)
    setTitle(search.search)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {/* Title Section */}
          <Title title={title}/>

          {/* Carousel Section */}
          <Showcase />

          {/* Search Form */}
          <Search onAdd={searchAmiibo} />

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

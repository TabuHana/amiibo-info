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

  //search
  const searchAmiibo = async (search) => {
    var characterName = search.search
      let amiiboData = await fetch(`https://amiiboapi.com/api/amiibo/?character=${characterName}`)

      if(amiiboData.status == 200) {
        let data = await amiiboData.json()
        console.log(data)
        console.log('================')
        console.log(characterName)
        setTitle(characterName)

      } else if (amiiboData.status == 404) {
        console.log('invald')
        setTitle('Error')
      }

      

  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {/* Title Section */}
          <Title title={title} />

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

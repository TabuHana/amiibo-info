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
  const [amiibo, setAmiibo] = useState()

  //search
  const searchAmiibo = async (search) => {
    let characterName = search.search.toUpperCase()
      let amiiboAPI = await fetch(`https://amiiboapi.com/api/amiibo/?character=${characterName}`)

      if(amiiboAPI.status === 200) {
        let data = await amiiboAPI.json()
        let amiiboData = data.amiibo
        setAmiibo(amiiboData)
        setTitle(characterName)

      } else if (amiiboAPI.status === 404) {
        console.log('invald')
        setTitle('Error')
      } else {
        console.log("Something didn't go right... I just don't know what")
        setTitle('Wha...')
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
          <Display amiibo={amiibo}/>


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

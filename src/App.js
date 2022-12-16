import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AmiiboProvider } from "./context/AmiiboContext";
import Footer from "./components/layouts/Footer";
import Navbar from './components/layouts/Navbar';
import About from "./pages/About";
import Amiibo from "./pages/Amiibo";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// https://amiiboapi.com/api/amiibo/?character=(character name)

function App() {

  //search
  // const searchAmiibo = async (search) => {
  //   let characterName = search.search.toUpperCase()
  //     let amiiboAPI = await fetch(`https://amiiboapi.com/api/amiibo/?character=${characterName}`)

  //     if(amiiboAPI.status === 200) {
  //       let data = await amiiboAPI.json()
  //       let amiiboData = data.amiibo
  //       setAmiibo(amiiboData)
  //       setTitle(characterName)

  //     } else if (amiiboAPI.status === 404) {
  //       console.log('invald')
  //       setTitle('Error')
  //     } else {
  //       console.log("Something didn't go right... I just don't know what")
  //       setTitle('Wha...')
  //     }



  // }

  return (
    <AmiiboProvider>

      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            {/* @todo - add home, about, amiibo, 404  + routes */ }
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/amiibo" element={ <Amiibo /> } />
              <Route path="/notfound" element={ <NotFound /> } />
              <Route path="/*" element={ <NotFound /> } />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AmiiboProvider>
  );
}

export default App;

// @todo - switch to sass, better for resume :(
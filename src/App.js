import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AmiiboProvider } from "./context/amiibo/AmiiboContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Footer from "./components/layouts/Footer";
import Navbar from './components/layouts/Navbar';
import Alert from "./components/layouts/Alert";
import About from "./pages/About";
import Amiibo from "./pages/Amiibo";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <AmiiboProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/amiibo/:id" element={ <Amiibo /> } />
                <Route path="/notfound" element={ <NotFound /> } />
                <Route path="/*" element={ <NotFound /> } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </AmiiboProvider>
  );
}

export default App;
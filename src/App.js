import './App.css';
import Navbar from './navbar';
import Home from './home'
import About from './about'
import Skills from './skills'
import Work from './work'
import Contact from './contact';
import {Helmet} from "react-helmet";
import Footer from './footer';

function App() {
  return (
    <div>
      <Helmet>
              <meta charSet="utf-8" />
              <title>Muhammad Prudentio</title>
            </Helmet>
      <Navbar /> 
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

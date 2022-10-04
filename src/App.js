import Navbar from './Components/navbar/navbar.component.js';
import Home from './Components/home/home.component.js';
import About from './Components/about/about.component.js';
// import Services from './Components/services.js';
import Projects from './Components/Projects/projects.component.js';
import Contact from './Components/contact/contact.component.js';
import Footer from './Components/footer.js';
import './css/styles.css';

function App() {
  return (
    <div className="App" id="top">
      <Navbar/> 
      <Home/>
      <About/>
      {/*<Services/>*/}
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
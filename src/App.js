import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import Testimonial from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import ContactDetails from './components/ContactDetails';

function App() {
  return (
   <>
   
   
   <h1 className='font-roboto'>




   <Navbar/>
   <Home/>
   <Skills/>
   <About/>
   <Portfolio/>
   {/* <Testimonial/> */}
   <Contact/>
   <Footer/>



   </h1>
   
   
   
   
   
   
   
   
   
   
   
   </>
  );
}

export default App;

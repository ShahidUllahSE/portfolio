import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ContactDetails from './components/ContactDetails';

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

   {/* <Router> */}
{/* <Routes>

<Route path='/ContactDetails' element={<ContactDetails/>}>

</Route>

</Routes>


   </Router> */}


   </h1>
   
   
   
   
   
   
   
   
   
   
   
   </>
  );
}

export default App;

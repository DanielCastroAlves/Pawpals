import './App.css';
import Header from './componets/Header';
import './assets/scss/pawpals.scss';
import Hero from './page/Hero';
import About from './page/About';
import Testimonial from './page/Testimonial';
import Contact from './page/Contact';
import Footer from './componets/Footer';


function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <About />
    <Testimonial />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;

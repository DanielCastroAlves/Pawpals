import './App.css';
import Header from './componets/Header';
import './assets/scss/pawpals.scss';
import Hero from './page/Hero';
import About from './page/About';

function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <About />
    </div>
  );
}

export default App;

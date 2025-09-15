import './App.css';
import Home from './components/home';
import Clients from'./components/clients';
import Service from './components/service';
import About from './components/about';
import Stats from './components/stats';
import Design from './components/design';
import Tesla from './components/tesla';
import Blog from './components/blog';
import Cta from './components/cta';
import Footer from './components/footer';
function App() {
  return (
    <div className="app-class">

      <Home/>
      <Clients/>
      <Service/>
      <About/>
      <Stats/>
      <Design/>
      <Tesla/>
      <Blog/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;

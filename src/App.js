import './App-styles/App.css';
import CallToAction from './components/call-to-action/cta-component';
import HeroImg from './components/icon-components/hero-img/hero-image-component';
import NavMenu from './components/navigation-menu/navigation-menu';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <div className="main-container">
        <HeroImg/>
        <CallToAction/>
      </div>
    </div>
  );
}

export default App; 

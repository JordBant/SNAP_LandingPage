import './App-styles/App.css';
import CallToAction from './components/call-to-action/call-component';
import HeroImg from './components/icon-components/hero-img/hero-image-component';
import NavMenu from './components/navigation-menu/navigation-menu';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <HeroImg/>
      <CallToAction/>
    </div>
  );
}

export default App; 

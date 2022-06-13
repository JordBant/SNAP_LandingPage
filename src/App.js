import './App-styles/App.css';
import HamburgerIcon from './components/icon-components/hamburger-icon/hamburger-icon-component';
// import Temp from './components/temp-component';
import NavMenu from './components/navigation-menu/navigation-menu';

function App() {
  return (
    <div className="App">
    <HamburgerIcon/>
      <NavMenu />
    </div>
  );
}

export default App; 

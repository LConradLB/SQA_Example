import logo from './maps-logo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.google.co.uk/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Maps
        </a>
      </header>
    </div>
  );
}

export default App;

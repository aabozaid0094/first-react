import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import logo from './logo.svg';
import Title from './Title';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Title title="Home"/>
      <Footer/>
    </div>
  );
}

export default App;

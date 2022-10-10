import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import ReactHeader from './components/ReactHeader';
import Title from './components/Title';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ReactHeader/>
      <Title title="Home"/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;

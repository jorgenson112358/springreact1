import logo from './logo.svg';
import './App.css';
import Characters from './components/characters.js';
import Musketeers from './components/musketeers.js';
import Books from './components/books.js';

function App() {
  return (
    <div className="App">
      <h1>ReactJS hosted in Spring Boot</h1>
	  <Characters />
	  <Musketeers />
	  <Books />
    </div>
  );
}

export default App;

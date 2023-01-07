import { Route } from 'react-router-dom';
import './App.css';
import Characters from './components/characters/characters';
import Home from './components/home/home';
import Ruteo from './components/route/route';
import Contact from './components/contact/contact';


function App() {
  return (
    <div className="App">
      <Ruteo/>
    </div>
  );
}

export default App;

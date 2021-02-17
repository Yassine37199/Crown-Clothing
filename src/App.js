import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;

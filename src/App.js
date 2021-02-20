import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import {Route} from 'react-router-dom'
import shopPage from './Pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={shopPage} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import {Route} from 'react-router-dom'
import shopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInUp from './Pages/Sign-In-Up/Sign-In-Up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={shopPage} />
      <Route exact path='/sign-in' component={SignInUp} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import {Route} from 'react-router-dom'
import shopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInUp from './Pages/Sign-In-Up/Sign-In-Up.component';
import { Component } from 'react';
import {auth} from '../src/firebase/firebase.utils'

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser : user
      } , () => console.log(this.state.currentUser) )
    })
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={shopPage} />
        <Route exact path='/sign-in' component={SignInUp} />
      </div>
    );
  }
}

export default App;

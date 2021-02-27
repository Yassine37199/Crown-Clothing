import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import {Route} from 'react-router-dom'
import shopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInUp from './Pages/Sign-In-Up/Sign-In-Up.component';
import { Component } from 'react';
import {auth , createUserProfile} from '../src/firebase/firebase.utils'

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
     if(user) {
       const userRef = await createUserProfile(user);
       
     }
    })
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
    createUserProfile(this.state.currentUser , )
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

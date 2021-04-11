import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import {Switch , Route , Redirect} from 'react-router-dom'
import shopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInUp from './Pages/Sign-In-Up/Sign-In-Up.component';
import { Component } from 'react';
import {auth , createUserProfile} from '../src/firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfile(userAuth);
       userRef.onSnapshot(snapshot => {
         setCurrentUser({
             id : snapshot.id,
             ...snapshot.data()
           });
     });
     }
       setCurrentUser(userAuth);
    });
  }

  

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }



  


  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={shopPage} />
        <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInUp />) } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps , mapDispatchToProps )(App);


import React, { Component } from 'react'
import HomePage from './pages/homepage/homepage.component'
import shopPage from './pages/shop/shop.component'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from '../src/components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-out/sign-in-and-out.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

const HatsPage =()=>(
    <div>
      <h1>HATS PAGE</h1>
    </div>
);
export default class App extends Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth= null


  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()  
            }
          },()=>{
            console.log(`state: `,this.state)
          });
        });
       
      }
      this.setState({
        currentUser:null
      })
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
          <Route exact patht="/shop" component={shopPage}/>
        </Switch>
      </div>
    )
  }
}


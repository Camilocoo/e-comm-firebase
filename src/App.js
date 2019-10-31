
import React, { Component } from 'react'
import HomePage from './pages/homepage/homepage.component'
import shopPage from './pages/shop/shop.component'
import {Switch, Route,Redirect} from 'react-router-dom'
import './App.css';
import Header from '../src/components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-out/sign-in-and-out.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/use.actions';

const HatsPage =()=>(
    <div>
      <h1>HATS PAGE</h1>
    </div>
);
class App extends Component {

  unsubscribeFromAuth= null


  componentDidMount(){
    const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()  
            })
        
          console.log(`steteee`,this.state);
         
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
          <Route  path="/shop" component={shopPage}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps =({user})=>({
 currentUser:user.currentUser
})


const mapDispatchToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
  )(App)


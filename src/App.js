import { useState, useEffect } from 'react';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { useSelector } from "react-redux";
import Profile from './Components/Profile/Profile';
import {Switch, Route} from "react-router-dom";


function App() {

  const { accessToken, user } = useSelector(state => state)
  const [signup, setSignup] = useState(true)

  useEffect(() => {
    console.log("app",user)
  }, [accessToken, user])
  

  
  return (
    <div className="App">
      
      {accessToken? (
        <div className="user-signin-section">
          <Switch>
            <Route 
              // exact 
              path = '/' 
              component ={()=> <Profile user = {user} accessToken ={accessToken}/>}
            />
          </Switch>
        </div>
        
      ):(
        <div className="user-signin-section">
          <Switch>
            <Route 
              exact 
              path = '/' 
              component ={() => <SignUp/>} 
            />
            <Route 
              path = '/signin' 
              component ={() => <SignIn/>}
            />
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;

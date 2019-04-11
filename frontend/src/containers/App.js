import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Main from './Main';
import BackgroundImage from '../images/background-photo-sm.jpg';
import Navbar from './navbar';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';


const store = configureStore();

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  try {
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch(e){
    store.dispatch(setCurrentUser({}));
  }
}


const App = () => (
  <Provider store={ store }>
    <Router>
    <div>
            
        <div className="mx-auto" id="App" style={{

        width: "100%",
        minHeight: "100vh", 
         }}>
          <Navbar />  
          <Main />
        </div>
    </div>
    </Router>
  </Provider>
)

export default App;

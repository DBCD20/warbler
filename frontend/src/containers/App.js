import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Main from './Main';

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
            
        <div className="mx-auto" style={{
        background: "url('https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat center",
        backgroundSize: "cover",
        width: "100%" }}>
          <Navbar />  
          <Main />
        </div>
    </div>
    </Router>
  </Provider>
)

export default App;

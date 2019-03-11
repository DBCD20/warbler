import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect }                   from "react-redux";
import Homepage                      from "../components/Homepage";
import AuthForm                      from "../components/AuthForm";
import { authUser }                  from "../store/actions/auth";
import { removeError }               from "../store/actions/error";


const Main = props => {
    const { authUser, error, removeError, currentUser } = props;
    return(
        <div className="container-fluid main">
            <Switch>
                <Route exact path="/" render={ props => <Homepage currentUser={ currentUser } { ...props } />} />
                <Route path="/signin" component={props => (<AuthForm errors = { error } removeError = { removeError }  {...props} onAuth={ authUser } buttonText="Log in" heading="Welcome Back!" />)} />
                <Route path="/signup"  render={props => (
                    <AuthForm signUp removeError = { removeError } errors = { error } buttonText="Sign me up!" onAuth={ authUser } {...props}  heading="Join Warbler today" />
                )}/>
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        error   : state.error
    }
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
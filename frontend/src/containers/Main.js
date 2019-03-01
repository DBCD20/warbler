import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
const Main = props => {
    return(
        <div className="container main">
            <Switch>
                <Route exact path="/" render={ props => <Homepage { ...props } />} />
                <Route path="/signin" component={props => (<AuthForm buttonText="Log in" heading="Welcome Back!" />)} />
                <Route path="/signup" render={props => (
                    <AuthForm signUp buttonText="Sign me up!" heading="Join Warbler today" />
                )}/>
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, null)(Main));
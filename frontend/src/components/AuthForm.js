import React, { Component } from 'react';
import { removeError } from '../store/actions/error';

export default class AuthForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props
        .onAuth(authType, this.state)
        .then(() => {
            this.props.history.push("/");
        }).catch(() =>{
            return;
        });
    }
    render(){
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp, errors, history, removeError } = this.props
        
        history.listen(() => {
            removeError();
        })
        
        return (
            <div className="justify-content-md-center text-left d-flex align-items-center" id="wrap">
            <div className="col-md-7 mx-auto p-1" >
            {errors.message && (<div className="alert alert-danger">{errors.message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>         
                    </div>)}

                <div className="form-wrap mx-auto shadow" >
                    
                    <form onSubmit={ this.handleSubmit }>
                    
                    <h2 className="text-center display-4">{ heading }</h2>
                        
                       
                        
                        <label className="lead mt-4 text-warning" htmlFor="email">Email</label>
                        <input 
                            className="form-control border-0 py-2 "
                            type="text"
                            id="email"
                            name="email"
                            onChange={ this.handleChange }
                            value={ email }
                        />

                        <label className="lead mt-4 text-warning" htmlFor="password">Password</label>
                        <input 
                            className="form-control py-2 border-0 d-block"
                            type="password"
                            id="password"
                            name="password"
                            onChange={ this.handleChange }
                            value={ password }
                            
                        />

                        {signUp && (
                        <div>
                            <label className="lead mt-4 text-warning" htmlFor="username">Username</label>
                            <input 
                                className="form-control border-0 py-2 "
                                type="text"
                                id="username"
                                name="username"
                                onChange={ this.handleChange }
                                value={ username }
                            />

                            <label className="lead mt-4 text-warning" htmlFor="profileImageUrl">Image URL</label>
                            <input 
                                className="form-control py-2 border-0 d-block"
                                type="text"
                                id="profileImageUrl"
                                name="profileImageUrl"
                                onChange={ this.handleChange }
                                value={ profileImageUrl }

                            />
                        </div>
                        
                        )}
                        <button className="shadow-lg border-0 mt-4 btn btn-block py-2 btn-warning lead">{ buttonText }</button>
                    </form>
                </div>
            </div>
                
            </div>
        )
    }
}
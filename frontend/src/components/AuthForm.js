import React, { Component } from 'react';


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
            <div className="col-xl-8 mx-auto" >
            {errors.message && (<div className="alert col-sm-8 col-md-6 col-xl-5 mx-auto alert-warning">{errors.message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>         
                    </div>)}

                <div className="form-wrap mx-auto shadow" >
                    
                    <form onSubmit={ this.handleSubmit }>
                    
                    <h2 className="text-center h1">{ heading }</h2>
                        
                       
                        
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
                            className="form-control mb-4 py-2 border-0 d-block"
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
                        <div style={{marginTop: "4em"}}>
                            <button  className="btn btn-block py-2 btn-warning h2">{ buttonText }</button>
                        </div>
                        
                    </form>
                </div>
            </div>
                
            </div>
        )
    }
}
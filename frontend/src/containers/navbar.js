import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import Logo  from '../images/bird.png';


 class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render(){
        return (
            <div className="col-md-12" style={{backgroundColor: 'black'}}>
                <nav className="navbar navbar-expand navbar-dark px-4 shadow  container" style={{lineHeight: "40px", background: "rgb(0, 1, 5)"}}>
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src={ Logo } width="30px" alt="Warbler" />
                        </Link>

                    { this.props.currentUser.isAuthenticated ? (
                        <ul className="navbar-nav navbar-right">
                            <li className="nav-item px-4">
                                    <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>
                                        <span className="nav-link">New Message</span>
                                    </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#' onClick={ this.logout }>Log out</a>
                            </li>
                        </ul>
                    ):(

                    
                <ul className="navbar-nav navbar-right">
                    <li className="nav-item px-4" style={{ width: "120px" }}><Link to="/signup"><span className="nav-link">Sign up</span></Link></li>
                    <li className="nav-item px-4" style={{ width: "120px" }}><Link to="signin"><span className="nav-link">Log in</span></Link></li>
                </ul>
                )}

                </div>
                </nav>

               
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, {logout})(Navbar);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo  from '../images/bird.png';


 class Navbar extends Component {

    render(){
        return (
            <nav className="navbar navbar-expand navbar-dark px-4 shadow" style={{lineHeight: "40px", background: "rgb(0, 1, 5)"}}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={ Logo } width="30px" alt="Warbler" />
                    </Link>
                </div>
            <ul className="navbar-nav navbar-right">
                <li className="nav-item px-4" style={{width: "120px"}}><Link to="/signup"><span className="nav-link">Sign up</span></Link></li>
                <li className="nav-item px-4" style={{width: "120px"}}><Link to="signin"><span className="nav-link">Log in</span></Link></li>
            </ul>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, null)(Navbar);
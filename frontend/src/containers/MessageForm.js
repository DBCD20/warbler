import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from "../store/actions/messages";

class MessagesForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: ""
        }
    }

    handleNewMessage = event => {
        event.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({message: ""});
        this.props.history.push("/");
    }

    render(){
        return(
            <div className="d-md-flex justify-content-center" style={{background: "linear-gradient(80deg, rgba(223,224,225,0.95), rgba(223,224,225,0.95))",minHeight: "100vh", paddingTop: "6rem"}}>
            <form onSubmit={ this.handleNewMessage } className="col-xl-5">
                {this.props.error && (
                    <div className="alert alert-danger border-0">{ this.props.error }</div>
                )}

                <textarea
                    type="text"
                    className="form-control bg-white border-0"
                    value={ this.state.message }
                    onChange = { e => this.setState({ message: e.target.value }) }
                    style={{
                      
                        minHeight: "300px"
                    }}
                />
                <button type="submit" className="btn btn-block btn-primary mt-4 py-2">Add This Message</button>
            </form>
            </div>

        )}

}

function mapStateToProps(state){
    return {
        errors: state.errors
    }
}
export default connect(mapStateToProps, { postNewMessage })(MessagesForm);
/**
 * Created by luis on 5/20/2016.
 */
import React,{Component} from "react";
import {Link} from "react-router"
import { connect } from 'react-redux'
import {signup} from '../API/auth'

class Signup extends Component{
    signup(e){
        e.preventDefault();
        this.props.signupUser(this.state);
    }
    handleChange(field, e){
        this.setState({[field]: e.target.value});
    }
    render(){
        return(
            <div id="signup">
                <ul className="tab-group ">
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>
                    <li className="active">
                        <Link to="/signup">Sign in</Link>
                    </li>
                </ul>
                <form action="/"  onSubmit={this.signup.bind(this)}>
                    <div className="top-row">
                        <div className="field-wrap">
                            <label>
                                First Name
                            </label>
                            <input type="text"  onChange={this.handleChange.bind(this,'firstName')}  required />
                        </div>

                        <div className="field-wrap">
                            <label>
                                Last Name
                            </label>
                            <input type="text" onChange={this.handleChange.bind(this,'lastName')}  required />
                        </div>
                    </div>
                    <div className="field-wrap">
                        <label>
                            Email Address
                        </label>
                        <input type="email"required onChange={this.handleChange.bind(this,'email')}  />
                    </div>

                    <div className="field-wrap">
                        <label>
                            Set A Password
                        </label>
                        <input type="password" onChange={this.handleChange.bind(this,'password')}  required/>
                    </div>
                    {this.props.errorMessage ? <span className="formError">{this.props.errorMessage}</span>:""}
                    <button type="submit" className="button button-block primary" >Get Started</button>
                </form>
            </div>
        )
    }
};



const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser:signup(dispatch)
    }
};

const SignupLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);

export default SignupLink
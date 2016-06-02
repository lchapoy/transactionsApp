/**
 * Created by luis on 5/20/2016.
 */
import React,{Component} from "react";
import {Link} from "react-router";
import { connect } from 'react-redux'
import {login} from '../API/auth'

class Login extends Component{
    handleChange(field, e){
        this.setState({[field]: e.target.value});
    }
    login(e){
        e.preventDefault();
        this.props.loginUser(this.state)
    }
    render(){
        return(

            <div id="login">

                <ul className="tab-group ">
                    <li className="active">
                        <Link to="/login">Log in</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign in</Link>
                    </li>
                </ul>
                <form action="/" onSubmit={this.login.bind(this)}>

                    <div className="field-wrap">
                        <label>
                            Email Address
                        </label>
                        <input type="email" onChange={this.handleChange.bind(this,'email')} required/>
                    </div>

                    <div className="field-wrap">
                        <label>
                            Password
                        </label>
                        <input type="password" onChange={this.handleChange.bind(this,'password')} required/>
                    </div>
                    {this.props.errorMessage ? <span className="formError">{this.props.errorMessage}</span>:""}

                    <button type='submit' className="button button-block primary"  >Log In</button>

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
        loginUser:login(dispatch)
    }
};

const LoginLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);


export default LoginLink
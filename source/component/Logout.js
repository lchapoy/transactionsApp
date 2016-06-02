/**
 * Created by luis on 5/20/2016.
 */
import React,{Component} from "react";
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';

import {logout,runaway} from '../Actions'

class Logout extends Component{
    componentWillMount (){
        this.props.logout();
        browserHistory.push("/");
    }
    render(){

        return(
            <h1>Log Out</h1>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout:()=>{
            localStorage.removeItem('id_token');
            dispatch(logout());
            dispatch(runaway());
        }
    }
};


const mapStateToProps = (state) => ({
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated
});



export default connect(mapStateToProps,mapDispatchToProps)(Logout);
/**
 * Created by luis on 6/1/2016.
 */

import {requestLogin,receiveLogin,loginError} from '../Actions'
import {requestSignup,receiveSignup,signupError} from '../Actions'
import {browserHistory} from 'react-router';

export function signup(dispatch){
    return function(creds){
        let config = {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(creds)
        };
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestSignup(creds));
        return fetch('http://localhost:3000/api/signup', config)
            .then(response =>
                response.json().then(user => ({ user, response }))
        ).then(({ user, response }) =>  {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(signupError(user.msg));
                    return Promise.reject(user)
                } else {
                    // If login was successful, set the token in local storage
                    localStorage.setItem('id_token', user.token);
                    // Dispatch the success action
                    dispatch(receiveSignup(user));
                    browserHistory.push("/dashboard");
                }
            }).catch(err => console.log("Error: ", err));
    }
}

export function login(dispatch){
    return function(creds){
        let config = {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(creds)
        };
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(creds));
        return fetch('http://localhost:3000/api/authenticate', config)
            .then(response =>
                response.json().then(user => ({ user, response }))
        ).then(({ user, response }) =>  {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(loginError(user.msg));
                    return Promise.reject(user)
                } else {
                    // If login was successful, set the token in local storage
                    localStorage.setItem('id_token', user.token);
                    // Dispatch the success action
                    dispatch(receiveLogin(user));
                    browserHistory.push("/dashboard");
                }
            }).catch(err => console.log("Error: ", err));
    }
}
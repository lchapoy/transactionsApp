/**
 * Created by luis on 5/24/2016.
 */
/*import {requestLogin,receiveLogin,loginError} from '../Actions'
import {requestSignup,receiveSignup,signupError} from '../Actions'*/

import {requestTrans,receiveTrans,transError} from '../Actions'
import {requestAddTrans,receiveAddTrans,addTransError} from '../Actions'
import {requestEditTrans,receiveEditTrans,editTransError} from '../Actions'

import {browserHistory} from 'react-router';

export function getAllTransactions(dispatch){
    return function(){
        let config = {
            method: 'GET',
            headers: { 'Content-Type':'application/json','Authorization':localStorage.getItem('id_token')}
        };
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestTrans());
        return fetch('http://localhost:3000/api/transactions', config)
            .then(response =>{
                return response.json().then(transactions => ({ transactions, response }))
            }

        ).then(({ transactions, response }) =>  {
                if (!response.ok) {
                    dispatch(transError(user.msg));
                    return Promise.reject(user)
                } else {
                    dispatch(receiveTrans(transactions.transactions));
                }
            }).catch(err => {
                console.log("Error: ", err);
                browserHistory.push("/logout");
            });

    }
}

export function addTranReq(dispatch){
    return function(transaction){
        let config = {
            method: 'POST',
            headers: { 'Content-Type':'application/json','Authorization':localStorage.getItem('id_token')},
            body:JSON.stringify(transaction)
        };
         //   setItem('id_token', user.token);
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestAddTrans());
        return fetch('http://localhost:3000/api/addTransactions', config)
        .then(response =>
                response.json().then(obj => ({ obj, response }))
        ).then(({ obj, response }) =>  {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(addTransError(obj.msg));
                    return Promise.reject(obj)
                } else {
                    // Dispatch the success action
                    dispatch(receiveAddTrans(obj.transactions));
                }
            }).catch(err => console.log("Error: ", err));

    }
}

export function editTranReq(dispatch){
    return function(transaction){
        console.log("hi",transaction)
        let config = {
            method: 'POST',
            headers: { 'Content-Type':'application/json','Authorization':localStorage.getItem('id_token')},
            body:JSON.stringify(transaction)
        };
        //   setItem('id_token', user.token);
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestEditTrans());
        return fetch('http://localhost:3000/api/editTransactions', config)
            .then(response =>
                response.json().then(obj => ({ obj, response }))
        ).then(({ obj, response }) =>  {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(editTransError(obj.msg));
                    return Promise.reject(obj)
                } else {
                    // Dispatch the success action
                    dispatch(receiveEditTrans(obj.transactions));
                }
            }).catch(err => console.log("Error: ", err));

    }
}
/**
 * Created by luis on 6/1/2016.
 */
import {requestCurrency,receiveCurrency,currencyError} from '../Actions'

import {browserHistory} from 'react-router';

export function getTodayCurrency(dispatch){
    return function(){
        let config = {
            method: 'GET',
            headers: { 'Content-Type':'application/json','Authorization':localStorage.getItem('id_token')}
        };
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestCurrency());
        return fetch('http://localhost:3000/api/getCurrency', config)
            .then(response =>{
                return response.json().then(currency => ({ currency, response }))
            }
        ).then(({ currency, response }) =>  {
                if (!response.ok) {
                    //dispatch(currencyError(currency.msg));
                    return Promise.reject(currency)
                } else {
                    dispatch(receiveCurrency(currency));
                }
            }).catch(err => {
                console.log("Error: ", err);
                browserHistory.push("/logout");
            });

    }
}
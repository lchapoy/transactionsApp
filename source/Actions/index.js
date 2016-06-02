/**
 * Created by luis on 5/20/2016.
 */
import constant from "../constants"
//*************************************
//Add REQUEST
export function requestAddTrans(){
    return {
        type: constant.ADD_REQUEST
    }
}
export function receiveAddTrans(transaction){
    return {
        type: constant.ADD_SUCCESS,
        transaction
    }
}
export function addTransError(message){
    return {
        type: constant.ADD_FAILURE,
        message
    }
}
//*************************************
//Edit REQUEST
export function requestEditTrans(){
    return {
        type: constant.EDIT_REQUEST
    }
}
export function receiveEditTrans(transaction){
    return {
        type: constant.EDIT_SUCCESS,
        transaction
    }
}
export function editTransError(message){
    return {
        type: constant.EDIT_FAILURE,
        message
    }
}
//******************************
//Sorter
export function setSorter(sorter){
    return {
        type: constant.SET_SORTER,
        sorter
    }
}

//***********************************************
//LOGIN REQUESTS
export function requestLogin(creds) {
    return {
        type: constant.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}
export function receiveLogin(user) {
    return {
        type: constant.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
}
export function loginError(message) {
    return {
        type: constant.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}
//**************************************
//LOGOUT REQUEST
export function logout() {
    return {
        type: constant.LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}
//****************************************
//SIGNUP
export function requestSignup(creds) {
    return {
        type: constant.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}
export function receiveSignup(user) {
    return {
        type: constant.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
}
export function signupError(message) {
    return {
        type: constant.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}
//*************************************
//Transactions
export function requestTrans() {
    return {
        type: constant.TRANSACTION_REQUEST,
        isFetching: true
    }
}
export function receiveTrans(transactions) {
    return {
        type: constant.TRANSACTION_SUCCESS,
        isFetching: false,
        transactions
    }
}
export function transError() {
    return {
        type: constant.TRANSACTION_FAILURE,
        isFetching: false
    }
}
//*************************************
//Currency
export function requestCurrency() {
    return {
        type: constant.CURRENCY_REQUEST,
        isFetching: true
    }
}
export function receiveCurrency(currency) {
    return {
        type: constant.CURRENCY_SUCCESS,
        isFetching: false,
        currency
    }
}
export function currencyError() {
    return {
        type: constant.CURRENCY_FAILURE,
        isFetching: false
    }
}
//*****************************
//Set Actual Currency being show
export function setCurrency(currency){
    return {
        type: constant.SET_CURRENCY,
        currency
    }
}
//Set Actual Currency rate (historical or today)
export function setDateCurrency(time){
    return {
        type: constant.SET_DATE_CURRENCY,
        time
    }
}
//*****************************************
//Erase Everything
export function runaway() {
    return {
        type: constant.RESET_APP,
        isFetching: false
    }
}
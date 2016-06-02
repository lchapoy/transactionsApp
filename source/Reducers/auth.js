/**
 * Created by luis on 6/1/2016.
 */
import constant from '../constants'

export default function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    errorMessage:""
}, action="") {
    switch (action.type) {
        case constant.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                errorMessage: '',
                user: action.creds
            });
        case constant.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case constant.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        case constant.SIGNUP_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                errorMessage: '',
                user: action.creds
            });
        case constant.SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case constant.SIGNUP_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        case constant.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false
            });
        case constant.RESET_APP:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage:""
            });
        default:
            return state
    }
}
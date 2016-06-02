/**
 * Created by luis on 5/20/2016.
 */
import constant from '../constants'

export default function transactions(state ={isFetching:false,all:[],shouldFetch:true}, action="") {
    switch (action.type) {
        case constant.EDIT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                errorMessage: ''
            });
        case constant.EDIT_SUCCESS:
            var x= state.all.map((transaction, index) => {
                if (transaction._id === action.transaction._id) {
                    return Object.assign({}, transaction,action.transaction );
                }
                return transaction
            });
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '',
                all:[...x]});
        case constant.EDIT_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message
            });
        case constant.TRANSACTION_REQUEST:
            return Object.assign({}, state, {shouldFetch:false});
        case constant.TRANSACTION_SUCCESS:
            return Object.assign({}, state, {shouldFetch:false,all:[...action.transactions]});
        case constant.TRANSACTION_FAILURE:
            return Object.assign({}, state, {shouldFetch:true});
        case constant.ADD_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                errorMessage: ''
            });
        case constant.ADD_SUCCESS:
            return Object.assign({}, state, {
            isFetching: false,
            errorMessage: '',
            all:[...state.all,{
                _id:action.transaction._id,
                company: action.transaction.company,
                type: action.transaction.type,
                amount: action.transaction.amount,
                date: action.transaction.date,
                rates:action.transaction.rates
            }]
        });
        case constant.ADD_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message
            });
        case constant.RESET_APP:
            return Object.assign({}, state, {isFetching:false,all:[],shouldFetch:true});
        default:
            return state
    }
}


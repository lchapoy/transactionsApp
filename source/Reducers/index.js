/**
 * Created by luis on 6/1/2016.
 */
import { combineReducers } from 'redux'
import sorter from "./sorter"
import currency  from "./currency"
import transactions  from "./transactions"
import auth  from "./auth"

const transactionsApp = combineReducers({
    sorter,
    currency,
    transactions,
    auth
});

export default transactionsApp
/**
 * Created by luis on 6/1/2016.
 */
import constant from '../constants'

export default function currency(state ={current:{val:'$',name:'USD'},time:"Historical",
    allCurrencies:[
        {val:"$",name:"USD"},
        {val:"&euro;",name:"EUR"},
        {val:"$",name:"CAD"},
        {val:"$",name:"MXN"},
        {val:"&#165; ",name:"CNY"},
        {val:"&#8377;",name:"INR"}
    ],
    today:{
        USD:0,
        EUR:0,
        CAD:0,
        MXN:0,
        CNY:0,
        INR:0
    }

}, action="") {
    switch (action.type) {
        case constant.SET_CURRENCY:
            return Object.assign({}, state,
                {current: state.allCurrencies.find((currency)=>{
                    return currency.name==action.currency
                })}
            );
        case constant.SET_DATE_CURRENCY:
            return Object.assign({}, state,
                {time: action.time});
        case constant.CURRENCY_REQUEST:
            return Object.assign({}, state, {});
        case constant.CURRENCY_SUCCESS:
            return Object.assign({}, state, {today:action.currency});
        case constant.CURRENCY_FAILURE:
            return Object.assign({}, state, { today:{
                USD:0,
                EUR:0,
                CAD:0,
                MXN:0,
                CNY:0,
                INR:0
            }});
        default:
            return state
    }
}
/**
 * Created by luis on 5/20/2016.
 */
//Import React
    import React,{Component} from "react";
    import {render} from "react-dom";
    import { browserHistory, Router, Route, Link, withRouter ,IndexRoute} from 'react-router';
//Import React redux
    import { Provider } from 'react-redux'
    //Import redux store
    import store from './store'
    //Reducer
//    import transactionApp from './Reducers/transactions.js'

//Import Components
import Signup from './Component/Signup.js';
import Login from './Component/Login.js';
import Logout from './Component/Logout.js';
import Dashboard from './Component/Dashboard.js';
import Add from './Component/Dashboard/Add.js';
import Edit from './Component/Dashboard/Edit.js';

import {requireAuthentication} from './Component/requireAuthentication';

class App extends Component{
    render(){


        return (

            <div className="form">
                <h1>Transaction Management App</h1>

                <div className="tab-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}




render (
<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="login" component={Login} />
            <Route name="signup" path="signup" component={Signup} />
            <Route path="logout" component={Logout} />
            <Route path="dashboard" component={requireAuthentication(Dashboard)}  />
            <Route path="add"  component={requireAuthentication(Add)} />
            <Route path="edit/:transaction_id"  component={requireAuthentication(Edit)} />

        </Route>
    </Router>
</Provider>
, document.getElementById('root'));
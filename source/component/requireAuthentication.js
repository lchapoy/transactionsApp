/**
 * Created by luis on 5/24/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {getAllTransactions} from '../API/transactions';

import {getTodayCurrency} from '../API/currency'

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth();
        }
        checkAuth() {
            console.log(this.props.isAuthenticated);
            if (!this.props.isAuthenticated) {

                browserHistory.push('/login');
            }else
            if(this.props.shouldFetch){
                console.log(this.props.shouldFetch);
                this.props.getTransactions();
                this.props.getTodayCurrency();

            }

        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
        shouldFetch:state.transactions.shouldFetch
    });

    const mapDispatchToProps = (dispatch) => {
        return {
            getTransactions:getAllTransactions(dispatch),
            getTodayCurrency:getTodayCurrency(dispatch)
        }
    };


    return connect(mapStateToProps,mapDispatchToProps)(AuthenticatedComponent);

}
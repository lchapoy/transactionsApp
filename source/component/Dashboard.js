/**
 * Created by luis on 5/20/2016.
 */
import React,{Component} from "react";
import Table from "./Dashboard/Table.js";
import CurrencyApp from "./Currency/App.js"
import {Link} from "react-router"
import { connect } from 'react-redux'
//import transactions from '../Reducers'
import {setSorter,setCurrency,setDateCurrency,getExchange} from '../Actions'


class Dashboard extends Component{
    render(){
       console.log(this.props.transactions);
        return(
           <div className="dashboard">
               <Table transactions={this.props.transactions} currency={this.props.currency} setCurrency={this.props.setCurrency} setDateCurrency={this.props.setDateCurrency}  setSorter={this.props.setSorter}/>
               {this.props.children}
               <CurrencyApp currency={this.props.currency} />
           </div>
        )
    }
};

const getTransactionSorted = (transactions, sorter) => {
    console.log("hello",transactions);
    switch (sorter) {
        case 'COMPANY':
             return transactions.slice().sort((a,b)=>{
                 if (a.company < b.company) //sort string ascending
                     return -1;
                 if (a.company > b.company)
                     return 1;
                 return 0; //default return value (no sorting)
             });
            break;
        case 'AMOUNT':
            return transactions.slice().sort((a,b)=>{
                if (a.amount < b.amount) //sort string ascending
                    return -1;
                if (a.amount > b.amount)
                    return 1;
                return 0; //default return value (no sorting)
             });
            break;
        case 'TYPE':
            return transactions.slice().sort((a,b)=>{
                if (a.type < b.type) //sort string ascending
                    return -1;
                if (a.type > b.type)
                    return 1;
                return 0; //default return value (no sorting)
            });
            break;
        case 'DATE':
            return transactions.slice().sort((a,b)=> new Date(a['date'])-new Date(b['date']));
            break;
    }

};


const mapStateToProps = (state) => {
    return {
        transactions: getTransactionSorted(state.transactions.all,state.sorter),
        currency:state.currency
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSorter:(sorter)=>{
            console.log(sorter);
            dispatch(setSorter(sorter))
        },
        setCurrency:(e)=>{
            dispatch(setCurrency(e.target.options[e.target.selectedIndex].value))
        },
        setDateCurrency:(e)=>{
            dispatch(setDateCurrency(e.target.options[e.target.selectedIndex].value))
        },
        getExchange:()=>{

        }
    }
}

const DashboardLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);


export default DashboardLink
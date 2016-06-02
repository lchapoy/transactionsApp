/**
 * Created by luis on 5/20/2016.
 */
import React,{Component} from "react";
import TableData from "./TableData";
import {Link} from "react-router"
import { connect } from 'react-redux'



class Table extends Component {
    render() {
        var total=0;
        var rows=this.props.transactions.map((item)=>{
            if(item.type=="Refund")
                total-=+item.amount*item.rates[this.props.currency.current.name];
            else
            total+=+item.amount*item.rates[this.props.currency.current.name];
            return <TableData key={item._id} currency={this.props.currency} {...item} />
        });
        var options=this.props.currency.allCurrencies.map((item)=>{
            return <option value={item.name} key={item.name}>{item.name}</option>
        });
        var amountCurrency=(total).toFixed(2);
        return(
            <div className="table-users">
                <div className="header">
                    <Link to="/add" className="newTrans">Add History </Link>
                    <select defaultValue={this.props.currency.current.name}  className="currency-selector" onChange={this.props.setCurrency}>
                        {options}
                    </select>
                    <select defaultValue={this.props.currency.time}  className="currency-selector" onChange={this.props.setDateCurrency}>
                        <option value="Historical" >Historical</option>
                        <option value="Today" >Today</option>
                    </select>
                    <Link to="/logout" className="newTrans left">Log out</Link>
                </div>
                <div className="table-data">
                    <table cellspacing="0">
                        <thead>
                        <tr>
                            <th className="tooltip tooltip-top" data-tooltip="Sort by Date" onClick={this.props.setSorter.bind(null,"DATE")}>Date </th>
                            <th className="tooltip tooltip-top" data-tooltip="Sort by Transaction" onClick={this.props.setSorter.bind(null,"TYPE")}>Transaction </th>
                            <th className="tooltip tooltip-top" data-tooltip="Sort by Company" onClick={this.props.setSorter.bind(null,"COMPANY")}>Company </th>
                            <th className="tooltip tooltip-top" data-tooltip="Sort by Amount" onClick={this.props.setSorter.bind(null,"AMOUNT")}>Amount </th>
                        </tr>
                        </thead>
                        <tbody className="table-body">
                        {rows}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>TOTAL</td>
                                <td> <span dangerouslySetInnerHTML={{__html:this.props.currency.current.val }} ></span> {amountCurrency}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

export default Table
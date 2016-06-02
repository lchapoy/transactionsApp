/**
 * Created by luis on 5/20/2016.
 */
import React,{Component} from "react";
import {browserHistory} from 'react-router';

class TableData extends Component {
    gotoEdit(id){
        browserHistory.push("edit/"+id);
    }
    render() {
            var rates= this.props.currency.time=="Historical"? this.props.rates[this.props.currency.current.name] : this.props.currency.today[this.props.currency.current.name];
            var amountCurrency=(this.props.amount*rates).toFixed(2);
            var val=this.props.currency.current.val;

        return(
            <tr onClick={this.gotoEdit.bind(this,this.props._id)}>
                <td>{this.props.date}</td>
                <td>{this.props.type}</td>
                <td>{this.props.company}</td>
                <td><span dangerouslySetInnerHTML={{__html: val }} ></span> {amountCurrency}</td>
            </tr>
        )
    }
}

export default TableData
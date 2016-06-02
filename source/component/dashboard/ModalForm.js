/**
 * Created by luis on 5/20/2016.
 */
import React,{Component} from "react";
import {browserHistory} from 'react-router';

class ModalForm extends Component {
    handleChange(field, e){
        //this.props.handleChange(field, e.target.value);
        this.setState({[field]: e.target.value});
        console.log(field,e.target.value)
    }
    handleClose(e){
        e.preventDefault();
        browserHistory.push('/dashboard');
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(this.state);
        browserHistory.push('/dashboard');
    }
    componentWillMount(){
        this.setState(Object.assign({},this.props.draft));
    }
    render() {
        var dateNew= new Date();
        var maxDate=dateNew.toISOString().substring(0, 10);
        return(
            <div id="modal">
                <form action="/" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="field-wrap">
                        <label>
                            Company:
                        </label>
                        <input type="text" value={this.state.company} onChange={this.handleChange.bind(this,'company')} required/>
                    </div>
                    <div className="field-wrap">
                        <label>
                            Transaction Type:
                        </label>
                        <select  value={this.state.type} onChange={this.handleChange.bind(this,'type')} required>
                            <option value="Purchase">Purchase</option>
                            <option value="Refund">Refund</option>
                            <option value="Transfer">Transfer</option>
                        </select>
                    </div>
                    <div className="field-wrap">
                        <label>
                            Amount:
                        </label>
                        <input type="number" value={this.state.amount} min="0" onChange={this.handleChange.bind(this,'amount')} required/>
                    </div>
                    <div className="field-wrap">
                        <label>
                            Date:
                        </label>
                        <input type="date" value={this.state.date} max={maxDate}  onChange={this.handleChange.bind(this,'date')} required/>
                    </div>
                    <button type='submit' className="button button-block primary">{this.props.label}</button>
                    <button  className="button button-block secondary" onClick={this.handleClose}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default ModalForm
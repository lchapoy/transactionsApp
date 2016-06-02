/**
 * Created by luis on 5/31/2016.
 */
import React,{Component} from "react"
    
class CurrencyApp extends Component{
    getExchange(){
        var from=this.refs.convertFrom.options[this.refs.convertFrom.selectedIndex].value;
        var to=this.refs.convertTo.options[this.refs.convertTo.selectedIndex].value;
        console.log(from,to);
        var result=this.props.currency.today[to]/this.props.currency.today[from];
        this.refs.convertRate.value=result.toFixed(2);
        this.refs.convertResult.value=(result*this.refs.convertAmount.value).toFixed(2);
    }
    render(){
        var options=this.props.currency.allCurrencies.map((item)=>{
            return <option value={item.name} key={item.name}>{item.name}</option>
        });

        return(
            <div>
                <div id="currency-app">

                        <h3>Convert Currencies</h3>
                        <span>From:</span>
                        <select defaultValue={this.props.currency.current.name}  className="currency-selector" ref="convertFrom">
                            {options}
                        </select>
                        <span>To:</span>
                        <select defaultValue={this.props.currency.current.name}  className="currency-selector" ref="convertTo">
                            {options}
                        </select>
                        <input type="text" name="amountCur" placeholder="Amount" ref="convertAmount"/>
                        <label for="result">Result: </label>
                        <div className='result'>
                            <label for="convResult">Amount: </label>
                            <input type="text" name="convResult" placeholder="Result" ref="convertResult" disabled/>
                            <label for="convRate">Exchange Rate: </label>
                            <input type="text" name="convRate" placeholder="Rate" ref="convertRate" disabled/>
                        </div>


                </div>
                <button className="button button-block primary" onClick={this.getExchange.bind(this)}>Get Value</button>
            </div>
        )
    }
}
export default CurrencyApp
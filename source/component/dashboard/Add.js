/**
 * Created by luis on 5/20/2016.
 */
import React,{Component} from "react";
import ModalForm from "./ModalForm.js";
import { connect } from 'react-redux'
import {addTranReq} from '../../API/transactions'

class Add extends Component {

    render() {
        var draft={amount:"",company:"",date:"",type:"Purchase"};
        return(
            <ModalForm label="add" handleSubmit={this.props.handleSubmit} draft={draft}/>
        )
    }
}

const mapDispatchToProps  = (dispatch) => ({
    handleSubmit: addTranReq(dispatch)
});

const AddConnect = connect(null,
    mapDispatchToProps
)(Add);


export default AddConnect
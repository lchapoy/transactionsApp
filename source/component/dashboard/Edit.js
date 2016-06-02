/**
 * Created by luis on 5/20/2016.
 */
import React,{Component} from "react";
import ModalForm from "./ModalForm.js";
import { connect } from 'react-redux'
//import {editTransaction} from '../../Actions'
import {editTranReq} from '../../API/transactions'

class Edit extends Component {
   /* handleChange(field, value){
        console.log(this)
        this.setState({[field]: value});
    }*/
    render() {
        return(
            <ModalForm label="edit" draft={this.props.draftItem}  handleSubmit={this.props.handleSubmit}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    draftItem: state.transactions.all.filter( (trans) => trans._id==ownProps.params.transaction_id )[0]
});

const mapDispatchToProps  = (dispatch) => ({
    handleSubmit: editTranReq(dispatch)

});

const EditConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);


export default EditConnect
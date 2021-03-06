import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import RemoveModal from './RemoveModal';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import { resolveRemoveModal } from '../actions/modals';

export class EditExpensePage extends React.Component {

    onSubmit = (expense)=> {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.resolveRemoveModal(true);
        // this.props.startRemoveExpense({id: this.props.expense.id});
        // this.props.history.push('/');
    }
   render() {
       return (
           <React.Fragment>
               <div className="page-header">
                   <div className="content-container">
                       <h1 className="page-header__title">Edit Expense</h1>
                   </div>
               </div>
               <div className="content-container">
                   <ExpenseForm
                       expense={this.props.expense}
                       onSubmit={this.onSubmit}
                   />
                   <button className="button button--remove" onClick={this.onRemove}>
                       Remove expense
                   </button>
               </div>
               <RemoveModal className="modal-container" {...this.props}/>
           </React.Fragment>
       );
   }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( (expense) => expense.id === props.match.params.id ),
        removeModal:  state.removeModal
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense)=> dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
        resolveRemoveModal: (data) => dispatch(resolveRemoveModal(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense)=>(
        <div key={expense.id}>
            <ExpenseListItem  {...expense} />
        </div>
    ))}
    </div>
)

const mapStateToProps = (state)=>{
    return {
       expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = (props) => (
    <div>
        <p>Viewing {props.expenseCount} expenses totaling {numeral(props.expenseTotal /100).format('$0,0.00')}</p>
    </div>
);

const mapStateToProps = (state)=>{
    const selectedExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: selectedExpenses.length,
        expenseTotal: getExpensesTotal(selectedExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);

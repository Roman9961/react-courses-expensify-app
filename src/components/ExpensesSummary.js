import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expenseCount}</span> expenses totaling <span>{numeral(props.expenseTotal /100).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create" >Add Expense</Link>
            </div>
        </div>
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

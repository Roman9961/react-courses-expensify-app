import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

store.dispatch(addExpense({description:'Water bill',amount:100, createdAt:910000000000}));
store.dispatch(addExpense({description:'Gas bill',amount:300, createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:109500, createdAt:-10000000}));

const jsx = (
    <Provider store = {store}>
     <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
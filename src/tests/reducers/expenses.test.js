import expensesReducer from '../../reducers/expenses';
import {expenses} from '../fixtures/expenses';

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=>{
    const action ={
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1],expenses[2]]);
});

test('should remove expense by fake id', ()=>{
    const action ={
        type: 'REMOVE_EXPENSE',
        id: 'fake id'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', ()=>{
    const expense ={
        id:4,
        description: 'Gas',
        note: 'test note',
        amount: 1,
        createdAt: 2
    }
    const action ={
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', ()=>{
    const action ={
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:{
            note:'new test note'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe('new test note');
});

test('should not edit fake expense', ()=>{
    const action ={
        type: 'EDIT_EXPENSE',
        id: 23,
        updates:{
            note:'new test note'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
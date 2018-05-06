import {addExpense, editExpense, removeExpense} from  '../../actions/expenses';

test('should set up remove expense action object', ()=>{
    const action = removeExpense({id:'test'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'test'
    });
});

test('should set up edit expense action object', ()=>{
    const action = editExpense('test', {note:'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'test',
        updates: {
            note: 'new note'
        }
    });
});

test('should setup add expense action object with provided values', ()=>{
    const expenseData = {
        description: 'Test',
        note: 'Test',
        amount: 0,
        createdAt: 0
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description : '',
            note : '',
            amount : 0,
            createdAt:0,
            id: expect.any(String)
        }
    })
});
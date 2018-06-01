import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,
        addExpense,
        editExpense,
        removeExpense,
        setExpenses,
        startSetExpenses,
        startEditExpense,
        startRemoveExpense}
        from  '../../actions/expenses';
import {expenses} from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'testuid';
const defaultAuthState = {auth:{uid}};
beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description, note, createdAt, amount})=>{
        expensesData[id] = {
            description,
            note,
            amount,
            createdAt
        }
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done());
});

test('should set up remove expense action object', ()=>{
    const action = removeExpense({id:'test'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'test'
    });
});

test('should remove expense from firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('should edit expense from firebase', (done)=>{
   const store = createMockStore(defaultAuthState);
    store.dispatch(startEditExpense(expenses[0].id, {amount: 500}))
        .then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id: expenses[0].id,
                updates:{ amount: 500 }
            });
            return expenses[0].id;
        })
        .then((id)=>{
            return database.ref(`users/${uid}/expenses/${id}`).once('value')
        })
        .then((snapshot)=>{
            expect(snapshot.val().amount).toBe(500);
            done();

        });
});

test('should setup add expense action object with provided values', ()=>{
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:expenses[0]
    })
});

test('should add expense to database and store',  (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 1000,
        note: 'Wireless mouse',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData))
        .then(()=>{
            const actions =  store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense:{
                    id: expect.any(String),
                    ...expenseData
                }
            });
            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const defaultData = {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
    };
    store.dispatch(startAddExpense({}))
        .then(()=>{
            const actions =  store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense:{
                    id: expect.any(String),
                    ...defaultData
                }
            });
            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
});

test('should setup set expenses action object with data',()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    })
});
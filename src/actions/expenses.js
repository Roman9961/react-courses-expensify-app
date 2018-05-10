import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
type: 'ADD_EXPENSE',
expense
});

export const startAddExpense = (expenseData = {}) => {

    return (dispatch) => {

        const {
            description = '',
            note = '',
            amount = 0,
            createdAt=0
        } = expenseData;

        const expense ={description, note, amount, createdAt};

        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((e)=>{

        });
    };
}

//Remove Expense
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

}
);

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
}
);

export const  setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses = [];
            snapshot.forEach((snapShotChild)=>{
                expenses.push({
                    id: snapShotChild.key,
                    ...snapShotChild.val()
                });
            });
            dispatch(setExpenses(expenses));
        })
    }
}

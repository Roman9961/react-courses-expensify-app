import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD Expense
const addExpense = (
        {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt=0
        } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//Remove Expense
    const removeExpense = ({id} = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    
    }
);

//Edit Expense
const editExpense = (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
);

//Set Text Filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
}
);

//Set Sort By Amount
const sortByAmount = () => ({
    type: 'SET_SORT_BY_AMOUNT',
}
);

//Set Sort By Date
const sortByDate = () => ({
    type: 'SET_SORT_BY_DATE',
}
);

//Set Start Date
const setStartDate = (startDate =  undefined) =>({
    type: 'SET_START_DATE',
    startDate
})

//Set End Date
const setEndDate = (endDate =  undefined) =>({
    type: 'SET_END_DATE',
    endDate
})

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);

        case 'EDIT_EXPENSE':
        return state.map((expense)=>(expense.id === action.id)?{...expense, ...action.updates}:expense)

        default:
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
};

const filtersReducer = (state =filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
        return {...state,text:action.text}

        case 'SET_SORT_BY_AMOUNT':
        return {...state, sortBy:'amount'}

        case 'SET_SORT_BY_DATE':
        return {...state, sortBy:'date'}

        case 'SET_START_DATE':
        return {...state, startDate:action.startDate}

        case 'SET_END_DATE':
        return {...state, endDate:action.endDate}

        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, {text, sortBy,startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){ 
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount'){
            return a.amount > b.amount ? 1 : -1;
        }
    })

}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,

    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

const itemOne = store.dispatch(addExpense({description:'Rent for month',amount:100, createdAt:-21000}));
const itemTwo = store.dispatch(addExpense({description:'Rent for week',amount:300, createdAt:-1000}));

// store.dispatch(removeExpense({id:itemOne.expense.id}));
// store.dispatch(editExpense(itemTwo.expense.id,{amount:500}));
// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

const demoState = {
    expenses:[{
        id: 'wqeqwed',
        description: 'Hjsfdj Rent',
        note: 'sfkdksdf lsdflsdf lsdf',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};


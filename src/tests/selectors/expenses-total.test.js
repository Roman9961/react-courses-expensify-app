import {expenses} from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('Should return correct result of total expenses amount', ()=>{
    const result = getExpensesTotal(expenses);
    expect(result).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount);
});

test('Should return 0 in no expenses', ()=>{
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('Should return correctly add single expense', ()=>{
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});


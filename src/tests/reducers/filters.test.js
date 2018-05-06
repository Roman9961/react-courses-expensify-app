import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('should set up default filter values', ()=>{
   const state = filtersReducers(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', ()=>{
    const state = filtersReducers(undefined, {type:'SET_SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', ()=>{
    const currentState ={
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducers(currentState, {type:'SET_SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
});

test('should set text filter', ()=>{
    const state = filtersReducers(undefined, {type:'SET_TEXT_FILTER',text:'test'});
    expect(state.text).toBe('test')
});

test('should set startDate filter', ()=>{
    const startDate = moment();
    const action = {
        type:'SET_START_DATE',
        startDate: startDate
    };
    const state = filtersReducers(undefined, action);
    expect(state.startDate).toEqual(startDate)
});

test('should set endDate filter', ()=>{
    const state = filtersReducers(undefined, {type:'SET_END_DATE',endDate:moment(0)});
    expect(state.endDate).toEqual(moment(0))
});
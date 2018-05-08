import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('Should render ExpensesSummary correctly', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount = {2} expenseTotal={2312312}/>);
    expect(wrapper).toMatchSnapshot();
});



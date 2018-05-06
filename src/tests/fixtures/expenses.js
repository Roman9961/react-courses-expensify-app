import moment from 'moment';

export const expenses = [{
    id:1,
    description: 'Gum',
    note: 'test note',
    amount: 1,
    createdAt: 1
},{
    id:2,
    description: 'Hot',
    note: 'test note2',
    amount: 3,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id:3,
    description: 'Puma',
    note: 'test note3',
    amount: 2,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
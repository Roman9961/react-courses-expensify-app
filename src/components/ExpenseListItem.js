import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <NavLink className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{moment(createdAt).locale('uk').format('DD MMMM, YYYY')}</span>
        </div>
        <h3 className="list-item__data">
            {numeral(amount/100).format('$0,0.00')}
        </h3>
    </NavLink>
);


export default connect()(ExpenseListItem);
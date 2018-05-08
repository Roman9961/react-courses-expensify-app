import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <React.Fragment>
    <NavLink to={`/edit/${id}`}>
        <h3>{description}</h3>
    </NavLink>
       <p>
           {numeral(amount/100).format('$0,0.00')}
           -
           {moment(createdAt).locale('uk').format('DD MMMM, YYYY')}
       </p>
    </React.Fragment>
);


export default connect()(ExpenseListItem);
import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

export const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <React.Fragment>
    <NavLink to={`/edit/${id}`}>
        <h3>{description}</h3>
    </NavLink>
       <p>{amount}-{createdAt}</p>
    </React.Fragment>
);


export default connect()(ExpenseListItem);
import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from  '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <p>
        <button onClick={startLogin}>Login</button>
    </p>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: ()=> dispatch(startLogin())
    }
};

export default connect(undefined, mapDispatchToProps)(LoginPage);

import React from 'react';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
     <p>Info is : {props.info}</p>
    </div>
);

const adminWorning = (WrappedComponent) => {
     return (props) => (
        <div>
            {props.isAdmin && <p>This is private info!</p>}
            <WrappedComponent {...props}/>
        </div>
     )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated?
                ( <WrappedComponent {...props}/>):
                (<p>Please Authenticate!</p>)
            }
        </div>
    )
}

const AdminInfo = adminWorning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {true} isAdmin={true} info="this is the details"/>, document.getElementById('app'));
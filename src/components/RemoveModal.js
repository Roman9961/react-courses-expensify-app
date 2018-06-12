import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startRemoveExpense} from '../actions/expenses';
import { resolveRemoveModal } from '../actions/modals';

Modal.setAppElement('#app');


const RemoveModal = (props) => {
    const handleCloseModal = ()=> {
        props.resolveRemoveModal(false);
    };
    const handleRemoveExpense = ()=> {
        props.resolveRemoveModal(false);
        props.startRemoveExpense({id: props.expense.id});
        props.history.push('/');
    };
    return (
        <Modal
            isOpen={props.removeModal}
            onRequestClose={handleCloseModal}
            contentLabel="Error"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title modal__title--error">Are You Shure?</h3>
            {props.removeModal && <p className="modal__body modal__body--error">You trying to delete this expense!</p>}
            <div className="modal-buttons">
            <button className="button button--modal" onClick={handleRemoveExpense}>Ok</button>
            <button className="button button--modal" onClick={handleCloseModal}>Cancel</button>
            </div>
        </Modal>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( (expense) => expense.id === props.match.params.id ),
        removeModal:  state.removeModal
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
        resolveRemoveModal: (data) => dispatch(resolveRemoveModal(data))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(RemoveModal);

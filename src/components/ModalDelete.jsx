import PropTypes from 'prop-types';
import '../styled-components/modalDelete.scss';


export default function ModalDelete({ show, onClose, onConfirm }) {
    if (!show) return null;

    return (
        <div className="modal">
            <p>Are you sure you want to delete this contact?</p>
            <div className="button-group">
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onClose}>No</button>
            </div>
        </div>
    );
}


ModalDelete.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

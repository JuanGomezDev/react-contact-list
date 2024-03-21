import PropTypes from 'prop-types';
import '../styled-components/card.scss';
import likeImg from '../assets/icon/like.png';
import deleteImg from '../assets/icon/delete.png';
import removeImg from '../assets/icon/remove.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setIsFavoriteContact } from '../redux/api/apiSlice';
import { useState } from 'react';
import ModalDelete from './ModalDelete';


export default function Card({contact}) {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.api.isFavoriteContactIds.includes(contact.id));
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleFavorite = () => {
        dispatch(setIsFavoriteContact(contact.id));
    };

    const handleDelete = () => {
        setShowConfirmation(true)
    }
    
    const confirmDelete = () => {
        dispatch(deleteUser(contact.id));
        setShowConfirmation(false);
    }

    const handleCloseModal = () => {
        setShowConfirmation(false);
    }

    return (
        <div className="card">
            <img src={contact.avatar} alt={contact.email} className={isFavorite ? "favorite" : ""}/>
            <h3>{contact.first_name} {contact.last_name}</h3>
            <p>{contact.email}</p>
            <div className="line"></div>
            <div className="action-buttons">
                {isFavorite 
                    ?
                    <button onClick={handleFavorite} className='button remove'>
                        <img src={removeImg} alt="" />
                    </button> 
                    :
                    <button onClick={handleFavorite} className='button like'>
                        <img src={likeImg} alt="" />
                    </button>
                }
                <button onClick={handleDelete} className='button delete'>
                    <img src={deleteImg} alt="" />
                </button> 
            </div>
            <ModalDelete show={showConfirmation} onClose={handleCloseModal} onConfirm={confirmDelete}/>
        </div>
    );
}

Card.propTypes = {
    contact: PropTypes.object.isRequired,
}

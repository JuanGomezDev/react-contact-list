import PropTypes from 'prop-types';
import '../styled-components/card.scss';
import likeImg from '../assets/icon/like.png';
import deleteImg from '../assets/icon/delete.png';
import removeImg from '../assets/icon/remove.png';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFavoriteContact } from '../redux/api/apiSlice';


export default function Card({contact}) {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.api.isFavoriteContactIds.includes(contact.id));

    const handleFavorite = () => {
        dispatch(setIsFavoriteContact(contact.id));
    };


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
                <button className='button delete'>
                    <img src={deleteImg} alt="" />
                </button> 
            </div>
        </div>
    );
}

Card.propTypes = {
    contact: PropTypes.object.isRequired,
}

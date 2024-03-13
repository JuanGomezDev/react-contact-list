import PropTypes from 'prop-types';
import '../styled-components/card.scss';
import likeImg from '../assets/icon/like.png';
import deleteImg from '../assets/icon/delete.png';
import removeImg from '../assets/icon/remove.png';
import { useState } from 'react';


export default function Card({ contact }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="card">
            <img src={contact.avatar} alt={contact.email} className={isFavorite ? "favorite" : ""}/>
            <h3>{contact.first_name} {contact.last_name}</h3>
            <p>{contact.email}</p>
            <div className="line"></div>
            <div className="action-buttons">
                {isFavorite 
                    ?
                    <button onClick={() => {setIsFavorite(false)}} className='button remove'>
                        <img src={removeImg} alt="" />
                    </button> 
                    :
                    <button onClick={() => {setIsFavorite(true)}} className='button like'>
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

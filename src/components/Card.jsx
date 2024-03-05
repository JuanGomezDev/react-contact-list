import PropTypes from 'prop-types';
import '../styled-components/card.scss';


export default function Card({ contact }) {
    const isFavorite = contact.isFavorite;

    return (
        <div className="card">
            <img src={contact.avatar} alt={contact.email} />
            <h3>{contact.first_name} {contact.last_name}</h3>
            <p>{contact.email}</p>
            <div className="line"></div>
            <div className="action-buttons">
                {isFavorite ? 
                    <button className='delete'>X</button> 
                :
                    <p>Like</p>
                }
            </div>
        </div>
    );
}

Card.propTypes = {
    contact: PropTypes.object.isRequired,
}

import PropTypes from 'prop-types';


export default function Card({contact}) {
    return (
        <div className="card">
            <img src={contact.avatar} alt={contact.email} />
            <h3>{contact.full_name}</h3>
            <p>{contact.email}</p>
        </div>
    );
}

Card.propTypes = {
    contact: PropTypes.object.isRequired,
}

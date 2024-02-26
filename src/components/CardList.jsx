import PropTypes from 'prop-types';
import '../styled-components/cardList.scss';
import Card from './Card';


export default function CardList({contactsList}) {
    return (
        <div className='contacts-container'>
            {contactsList.map((contact) => {
                return <Card key={contact.id} contact={contact}/>
            })}
        </div>
    );
}

CardList.propTypes = {
    contactsList: PropTypes.array.isRequired,
}

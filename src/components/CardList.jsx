import PropTypes from 'prop-types';
import '../styled-components/cardList.scss';
import Card from './Card';


export default function CardList({contacts}) {
    return (
        <div className='contacts-container'>
            {contacts.map((contact) => {
                return <Card key={contact.id} contact={contact}/>
            })}
        </div>
    );
}


CardList.propTypes = {
    contacts: PropTypes.array.isRequired,
}
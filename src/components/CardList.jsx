import { useSelector } from 'react-redux';
import '../styled-components/cardList.scss';
import Card from './Card';


export default function CardList() {
    const contacts = useSelector(state => state.api.contacts); 

    return (
        <div className='contacts-container'>
            {contacts.map((contact) => {
                return <Card key={contact.id} contact={contact}/>
            })}
        </div>
    );
}

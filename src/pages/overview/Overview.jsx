import { useSelector } from 'react-redux';
import HeaderDivider from '../../components/HeaderDivider';
import CardList from '../../components/CardList';
import Pagination from '../../components/Pagination';


export default function Overview() {
    const isLoading = useSelector(state => state.api.isLoading);
    const contacts = useSelector(state => state.api.contacts);
    const isFavoriteContactIds = useSelector(state => state.api.isFavoriteContactIds);

    // obtener solo los contactos favoritos
    const favoriteContacts = contacts.filter(contact => isFavoriteContactIds.includes(contact.id));


    return (
        <>
        {
        isLoading 
            ?   <h1 style={{marginTop: '120px', textAlign: 'center'}}>Loading contacts...</h1>
            :
                <>
                <section>
                <HeaderDivider title='Favorites' />
                {
                    favoriteContacts.length == 0 
                    ?
                    <h1 style={{marginTop: '120px', textAlign: 'center'}}>You don´t have any favorite contacts yet</h1>
                    :
                    <CardList contacts={favoriteContacts}/>
                }
                </section>
                <section>
                    <HeaderDivider title='Contact List' />
                    <CardList contacts={contacts}/>
                    <Pagination />
                </section>
                </>
        }
        </>
    );
}

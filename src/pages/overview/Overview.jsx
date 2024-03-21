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

    if (isLoading) {
        return (
            <h1 style={{ marginTop: '120px', textAlign: 'center' }}>Loading contacts...</h1>
        )
    }


    return (
        <>
            <section>
                <HeaderDivider title='Favorites' />
                {
                    favoriteContacts.length == 0
                    ?
                    <h1 style={{ margin: '120px 0px', textAlign: 'center' }}>You don´t have any favorite contacts yet</h1>
                    :
                    <CardList contacts={favoriteContacts} />
                }
            </section>
            <section>
                <HeaderDivider title='Contact List' />
                <CardList contacts={contacts} />
                { contacts.length >= 6 && <Pagination /> }
            </section>
        </>
    );
}

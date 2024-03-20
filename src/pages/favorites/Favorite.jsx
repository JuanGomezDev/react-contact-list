import { useSelector } from "react-redux";
import HeaderDivider from '../../components/HeaderDivider';
import CardList from '../../components/CardList';
import Pagination from '../../components/Pagination';


export default function Favorite() {
    const isLoading = useSelector(state => state.api.isLoading);
    const contacts = useSelector(state => state.api.contacts);
    const isFavoriteContactIds = useSelector(state => state.api.isFavoriteContactIds);

    // obtener solo los contactos favoritos
    const favoriteContacts = contacts.filter(contact => isFavoriteContactIds.includes(contact.id));

    
    return (
        <section>
        <HeaderDivider title='Favorites' />
        {
            isLoading 
            ?   <h1 style={{marginTop: '120px', textAlign: 'center'}}>Loading contacts...</h1>
            :
                favoriteContacts.length == 0 
                ?
                <h1 style={{marginTop: '120px', textAlign: 'center'}}>You don´t have any favorite contacts yet</h1>
                :
                <>
                <CardList contacts={favoriteContacts}/>
                <Pagination />
                </>
        }
        </section>
    )
}

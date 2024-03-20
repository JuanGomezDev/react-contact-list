import { useSelector } from "react-redux";
import ContactList from "../../components/ContactList";


export default function Favorite() {
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
                favoriteContacts.length == 0 
                ?
                <h1 style={{marginTop: '120px', textAlign: 'center'}}>You don´t have any favorite contacts yet</h1>
                :
                <ContactList title='Favorites' contacts={favoriteContacts}/>
        }
        </>
    )
}

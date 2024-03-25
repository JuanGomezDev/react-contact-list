import { useSelector } from "react-redux";
import HeaderDivider from '../../components/HeaderDivider';
import Pagination from '../../components/Pagination';
import SearchableList from "../../components/Searchable";


export default function Favorite() {
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

    if (!favoriteContacts.length) {
        return (
            <h1 style={{ marginTop: '120px', textAlign: 'center' }}>You don´t have any favorite contacts yet</h1>
        )
    }


    return (
        <section>
            <HeaderDivider title='Favorites' />
            <SearchableList
                items={favoriteContacts}
                filterFunction={searchText => contact =>
                    contact.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                    contact.last_name.toLowerCase().includes(searchText.toLowerCase())
                }
            />
            { favoriteContacts.length >= 6 && <Pagination /> }
        </section>
    )
}

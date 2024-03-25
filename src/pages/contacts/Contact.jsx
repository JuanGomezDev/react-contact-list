import { useSelector } from 'react-redux';
import HeaderDivider from '../../components/HeaderDivider';
import CardList from '../../components/CardList';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';


export default function Contact() {
    const isLoading = useSelector(state => state.api.isLoading);
    const contacts = useSelector(state => state.api.contacts);
    const [searchText, setSearchText] = useState('');

    if (isLoading) {
        return (
            <h1 style={{marginTop: '120px', textAlign: 'center'}}>Loading contacts...</h1>
        )
    }

    if (!contacts.length) {
        return (
            <h1 style={{marginTop: '120px', textAlign: 'center'}}>There are no contacts</h1>
        )
    }

    // filtrar los contactos en función del texto de búsqueda, por nombre o apellido
    const filteredContacts = contacts.filter((contact) =>
        contact.first_name.toLowerCase().includes(searchText.toLowerCase()) || 
        contact.last_name.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <>
            <section>
                <SearchBar searchText={searchText} setSearchText={setSearchText}/>
                <HeaderDivider title='Contact List' />
                <CardList contacts={filteredContacts}/>
                { contacts.length >= 6 && <Pagination /> }
            </section>
        </>
    )
}

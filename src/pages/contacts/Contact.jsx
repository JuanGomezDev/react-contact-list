import { useSelector } from 'react-redux';
import HeaderDivider from '../../components/HeaderDivider';
import Pagination from '../../components/Pagination';
import SearchableList from '../../components/Searchable';


export default function Contact() {
    const isLoading = useSelector(state => state.api.isLoading);
    const contacts = useSelector(state => state.api.contacts);

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


    return (
        <>
            <section>
                <HeaderDivider title='Contact List' />
                <SearchableList
                    items={contacts}
                    filterFunction={searchText => contact =>
                        contact.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                        contact.last_name.toLowerCase().includes(searchText.toLowerCase())
                    }
                />
                { contacts.length >= 6 && <Pagination /> }
            </section>
        </>
    )
}

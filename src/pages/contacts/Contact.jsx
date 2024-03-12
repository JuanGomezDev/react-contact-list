import PropTypes from 'prop-types';
import ContactList from '../../components/ContactList';


export default function Contact({isLoading, contacts, page, setPage, totalPages}) {
    return (
        <>
        {
        isLoading 
            ?   <h1 style={{marginTop: '120px', textAlign: 'center'}}>Loading contacts...</h1>
            :
                <ContactList title='Contact List' contacts={contacts} page={page} setPage={setPage} totalPages={totalPages}/>
        }
        </>
    )
}

Contact.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    contacts: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
}

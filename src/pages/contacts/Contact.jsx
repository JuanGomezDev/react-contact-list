import ContactList from '../../components/ContactList';
import { useSelector } from 'react-redux';


export default function Contact() {
    const isLoading = useSelector(state => state.api.isLoading);
    const contacts = useSelector(state => state.api.contacts);

    return (
        <>
        {
        isLoading 
            ?   <h1 style={{marginTop: '120px', textAlign: 'center'}}>Loading contacts...</h1>
            :
                <ContactList title='Contact List' contacts={contacts}/>
        }
        </>
    )
}

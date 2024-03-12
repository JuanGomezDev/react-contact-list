import { useEffect, useState } from "react";
import ContactList from "../../components/ContactList";
import Nav from "../../components/Nav";
import { getUsers } from "../../services/api";


export default function Contact() {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    // Consumir api, obtener usuarios
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await getUsers(page);
                
                setContacts(res.data.data);
                setTotalPages(res.data.total_pages);
                setIsLoading(false);
            } catch (error) {
                console.log('Error: ', error);
            }
        }

        fetchContacts();
    }, [])
    
    // Cambiar de pagina al actualizar el valor de page
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await getUsers(page);
                
                setContacts(res.data.data);
                setIsLoading(false);
            } catch (error) {
                console.log('Error: ', error);
            }
        }
        
        fetchContacts();
    }, [page])

    return (
        <>
        <Nav setContacts={setContacts}/>
        {
            isLoading 
                ? <h1 style={{marginTop: '120px', textAlign: 'center'}}>Loading contacts...</h1>
                : <ContactList contacts={contacts} page={page} setPage={setPage} totalPages={totalPages}/>
        }
        </>
    )
}

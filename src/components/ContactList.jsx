import CardList from "./CardList";
import HeaderDivider from "./HeaderDivider";
import { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import Pagination from "./Pagination";


export default function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Consumir api, obtener usuarios
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await getUsers(page);
                
                setContacts(res.data.data);
                setTotalPages(res.data.total_pages);
                setLoader(true);
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
                setLoader(true);
            } catch (error) {
                console.log('Error: ', error);
            }
        }
        
        fetchContacts();
    }, [page])


    if(!loader) { 
        return <h1 style={{marginTop: '120px', textAlign: 'center'}}>Loading contacts...</h1>
    }

    return (
        <section>
            <HeaderDivider title="Contact List" />
            <CardList contactsList={contacts} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
        </section>
    )
}

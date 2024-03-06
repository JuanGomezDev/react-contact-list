import CardList from "./CardList";
import HeaderDivider from "./HeaderDivider";
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsers } from '../services/api';


export default function ContactList() {
    const [contacts, setContacts] = useState([]);

    // Consumar api, obtener usuarios
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await getUsers();
                setContacts(res.data.data);
            } catch (error) {
                console.log('Error: ', error);
            }
        }

        fetchContacts();
    }, [])
    
    return (
        <section>
            <HeaderDivider title="Contact List" />
            <CardList contactsList={contacts} />
        </section>
    )
}

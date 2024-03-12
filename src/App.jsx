import { Routes, Route } from "react-router-dom";
import Overview from './pages/overview/Overview';
import Contact from './pages/contacts/Contact';
import Favorite from './pages/favorites/Favorite';
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { getUsers } from "./services/api";


export default function App() {
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

        <Routes>
            <Route path="/" element={<Overview isLoading={isLoading} contacts={contacts} page={page} setPage={setPage} totalPages={totalPages}/>} />
            <Route path="contacts" element={<Contact isLoading={isLoading} contacts={contacts} page={page} setPage={setPage} totalPages={totalPages}/>} />
            <Route path="favorites" element={<Favorite />} />
        </Routes>
        </>
    );
}
import { useContext } from "react";

export default function name() {
    const [contacts, setContacts] = useState([]);

    // Consumir api, obtener usuarios
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


    useContext();

    return (
        <></>
    )
}



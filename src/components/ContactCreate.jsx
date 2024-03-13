import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import '../styled-components/contactCreate.scss';
import { createUser } from '../services/api';


export default function ContactCreate({setContacts}) {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();

    // Subir al tope de la pagina al renderizar este componente
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e) => {
        // evitar que se recargue la pagina
        e.preventDefault();

        const first_name = firstNameRef.current.value;
        const last_name = lastNameRef.current.value;
        const email = emailRef.current.value;

        // Contacto a enviar
        const contact = {
            first_name,
            last_name,
            email
        }

        try {
            const response = await createUser(contact);
            // img por defecto
            const img = 'https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png';
            // crear copia de response y agregar la img
            const newContact = {...response.data};
            newContact.avatar = img;
            // agregar nuevo contacto a la lista de contactos
            setContacts((prev) => [...prev, newContact]);

            // vaciar campos
            firstNameRef.current.value = '';
            lastNameRef.current.value = '';
            emailRef.current.value = '';
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='First Name' required ref={firstNameRef}/>
            
            <input type="text" placeholder='Last Name' required ref={lastNameRef}/>

            <input type="email" placeholder='Email' required ref={emailRef}/>
            
            <div className="turn-favorite">
                <label htmlFor="favorite">Enable like favorite</label>
                <input type="checkbox" id='favorite'/>
            </div>
            
            <button type="submit" className='save-btn'>SAVE</button>
        </form>
    )
}

ContactCreate.propTypes = {
    setContacts: PropTypes.func.isRequired,
}

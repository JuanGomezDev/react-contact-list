import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import '../styled-components/contactCreate.scss';
import { createUser } from '../redux/api/apiSlice';
import { useDispatch } from 'react-redux';


export default function ContactCreate({setShowForm}) {
    const dispatch = useDispatch();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const [isFavorite, setIsFavorite] = useState(false);

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
        const avatar = 'https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png';

        // Contacto a enviar
        const contact = {
            first_name,
            last_name,
            email,
            avatar,
            isFavorite: isFavorite
        }

        try {
            dispatch(createUser(contact));

            // vaciar campos
            firstNameRef.current.value = '';
            lastNameRef.current.value = '';
            emailRef.current.value = '';
            setIsFavorite(false)

            setShowForm(false);
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleCheckboxChange = (e) => {
        setIsFavorite(e.target.checked);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='First Name' required ref={firstNameRef}/>
            
            <input type="text" placeholder='Last Name' required ref={lastNameRef}/>

            <input type="email" placeholder='Email' required ref={emailRef}/>
            
            <div className="turn-favorite">
                <label htmlFor="favorite">Enable like favorite</label>
                <input type="checkbox" id='favorite' checked={isFavorite} onChange={handleCheckboxChange}/>
            </div>
            
            <button type="submit" className='save-btn'>SAVE</button>
        </form>
    )
}

ContactCreate.propTypes = {
    setShowForm: PropTypes.func.isRequired,
}

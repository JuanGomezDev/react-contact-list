import { useEffect, useRef } from 'react';
import '../styled-components/contactCreate.scss';

// useForm

export default function ContactCreate() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        // evitar que se recargue la pagina
        e.preventDefault();
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='First Name' required ref={firstNameRef}/>
            
            <input type="text" placeholder='Last Name' required ref={lastNameRef}/>

            <input type="email" placeholder='Email' required ref={emailRef}/>
            
            <div className="turn-favorite">
                <label htmlFor="favorite">Enable like favorite</label>
                <input type="checkbox" id="favorite" name="favorite"/>
            </div>
            
            <button type="submit" className='save-btn'>SAVE</button>
        </form>
    )
}

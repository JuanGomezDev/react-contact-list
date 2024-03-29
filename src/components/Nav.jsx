import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styled-components/nav.scss';
import plusImg from '../assets/icon/plus.png';
import avatarImg from '../assets/icon/avatar.png';
import NavLink from './NavLink';
import { useState } from 'react';
import ContactCreate from './ContactCreate';


export default function Nav({setContacts}) {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    return (
        <>
        <nav>
            <div className="brand">
                <Link to='/'>
                    <img src={avatarImg} alt="logoImg" />
                </Link>
            </div>
            <div className="navbar-nav">
                <NavLink text='Overview' path='/' />
                <NavLink text='Contacts' path='/contacts' />
                <NavLink text='Favorites' path='/favorites' />
                <button onClick={handleButtonClick}>
                    <img src={plusImg} alt="plus" />
                    NEW
                </button>
            </div>
        </nav>
        { showForm && <ContactCreate setContacts={setContacts} setShowForm={setShowForm}/> }
        </>
    )
}

Nav.propTypes = {
    setContacts: PropTypes.func.isRequired,
}

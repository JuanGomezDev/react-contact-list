import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styled-components/navLink.scss';
import { useState } from 'react';

export default function NavLink({ text = 'Link', path = '#' }) {
    const [isActive, setIsActive] = useState(false);

    const handleActive = () => {
        setIsActive(true);
    };

    return (
        <Link to={path} className={`nav-item ${isActive ? 'menu-active' : ''}`} onClick={handleActive}>
            {text}
        </Link>
    )
}

NavLink.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

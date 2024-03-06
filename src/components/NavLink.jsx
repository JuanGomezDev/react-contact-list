import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import '../styled-components/navLink.scss';
import { useEffect, useState } from 'react';

export default function NavLink({ text = 'Link', path = '#' }) {
    const [isActive, setIsActive] = useState(false);

    // Uso de useLocation para obtener la ubicacion actual de la pagina
    const currentLocation = useLocation();

    // Efecto para activar eestilo activo al link 
    useEffect(() => {
        setIsActive(location.pathname === path)
    }, [currentLocation, path])

    return (
        <Link to={path} className={`nav-item ${isActive ? 'menu-active' : ''}`}>
            {text}
        </Link>
    )
}

NavLink.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

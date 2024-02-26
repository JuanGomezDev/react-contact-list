import PropTypes from 'prop-types';
import dividerImg from '../assets/icon/divider.png';
import '../styled-components/headerDivider.scss';

export default function HeaderDivider({title = 'Encabezado'}) {
    return (
        <header>
            <h1>{title}</h1>
            <img src={dividerImg} alt="Linea divisora" />
        </header>
    )
}

HeaderDivider.propTypes = {
    title: PropTypes.string.isRequired,
}

import PropTypes from 'prop-types';
import CardList from "./CardList";
import HeaderDivider from "./HeaderDivider";


export default function ContactList({contacts}) {
    return (
        <section>
            <HeaderDivider title="Contact List" />
            <CardList contactsList={contacts} />
        </section>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
}

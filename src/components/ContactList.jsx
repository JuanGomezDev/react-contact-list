import PropTypes from 'prop-types';
import CardList from "./CardList";
import HeaderDivider from "./HeaderDivider";
import Pagination from "./Pagination";


export default function ContactList({contacts, page, setPage, totalPages}) {
    return (
        <section>
            <HeaderDivider title="Contact List" />
            <CardList contactsList={contacts} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
        </section>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
}

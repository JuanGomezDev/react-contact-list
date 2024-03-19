import PropTypes from 'prop-types';
import CardList from "./CardList";
import HeaderDivider from "./HeaderDivider";
import Pagination from "./Pagination";


export default function ContactList({title}) {
    return (
        <section>
            <HeaderDivider title={title} />
            <CardList />
            <Pagination />
        </section>
    )
}

ContactList.propTypes = {
    title: PropTypes.string.isRequired,
}

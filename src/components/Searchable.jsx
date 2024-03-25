import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import CardList from './CardList';


export default function SearchableList({ items, filterFunction }) {
    const [searchText, setSearchText] = useState('');

    const filteredItems = items.filter(filterFunction(searchText));

    return (
        <div>
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <CardList contacts={filteredItems} />
        </div>
    );
}


SearchableList.propTypes = {
    items: PropTypes.array.isRequired,
    filterFunction: PropTypes.func.isRequired,
};
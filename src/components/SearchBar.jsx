import PropTypes from 'prop-types';
import "../styled-components/searchBar.scss";


export default function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Busca un contacto... 🔍"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}


SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
}


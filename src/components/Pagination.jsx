import PropTypes from 'prop-types';
import '../styled-components/pagination.scss';


export default function Pagination({page, setPage, totalPages}) {
    const handlePage = (nPage) => {
        const nextPage = page + nPage;
        
        if (nextPage<1 || nextPage>totalPages) {
            console.log('No hay página válida');
        } else {
            setPage(nextPage)
        }
    }

    return (
        <div className='pagination-container'>
            <p>{page} de {totalPages}</p>
            <button onClick={() => handlePage(-1)}>{"<"}</button>
            <button onClick={() => handlePage(+1)}>{">"}</button>
        </div>
    )
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired
}
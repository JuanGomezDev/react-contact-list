import { setPage } from '../redux/api/apiSlice';
import '../styled-components/pagination.scss';
import { useDispatch, useSelector } from 'react-redux';


export default function Pagination() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.api.page);
    const totalPages = useSelector(state => state.api.totalPages);

    const handlePage = (nPage) => {
        const nextPage = page + nPage;
        
        if (nextPage<1 || nextPage>totalPages) {
            console.log('No hay página válida');
        } else {
            dispatch(setPage(nextPage));
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

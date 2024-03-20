import { useSelector } from 'react-redux';
import HeaderDivider from '../../components/HeaderDivider';
import CardList from '../../components/CardList';
import Pagination from '../../components/Pagination';


export default function Contact() {
    const isLoading = useSelector(state => state.api.isLoading);
    const contacts = useSelector(state => state.api.contacts);

    
    return (
        <>
            <section>
                <HeaderDivider title='Contact List' />
                {
                isLoading 
                    ?   <h1 style={{marginTop: '120px', textAlign: 'center'}}>Loading contacts...</h1>
                    :
                    <CardList contacts={contacts}/>
                }
                <Pagination />
            </section>
        </>
    )
}

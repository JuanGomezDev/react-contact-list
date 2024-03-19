import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Overview from './pages/overview/Overview';
import Contact from './pages/contacts/Contact';
import Favorite from './pages/favorites/Favorite';
import Nav from "./components/Nav";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/api/apiSlice';


export default function App() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.api.page);

    useEffect(() => {
        dispatch(getUsers(page));
    }, [page]);

    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="contacts" element={<Contact />} />
                <Route path="favorites" element={<Favorite />} />
            </Routes>
        </>
    );
}

import { Routes, Route } from "react-router-dom";
import Overview from './pages/overview/Overview';
import Contact from './pages/contacts/Contact';
import Favorite from './pages/favorites/Favorite';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="favorites" element={<Favorite />} />
        </Routes>
    );
}
import { Route, Routes } from 'react-router-dom';
import Header from './Header/index';
import Home from '../pages/Home';
import Company from '../pages/Company';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/company" element={<Company />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default Router;
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from 'react-helmet';

export default function Layout() {
    return (
        <>
            <Helmet >
                <meta name="author" content="Sven van Rijn" />
                <title>Tiny Galerie</title>
            </Helmet>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

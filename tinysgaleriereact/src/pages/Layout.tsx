import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <meta name="author" content="Sven van Rijn" />
                <title>Tiny Galerie</title>
            </Helmet>
            <Header />
            <div className="sm:w-70 mx-auto grow p-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

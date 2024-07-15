import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {}

export default function NavMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 1150px)" });

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenuOnMobile = () => {
        if (isMobile) {
            setShowMenu(false);
        }
    };

    const renderNavItems = () => {
        const listClassName = isMobile ? "nav__list " : "nav__list__web flex gap-4";
        const linkClassName = "nav__link";
        return (
            <ul className={listClassName}>
                <li>
                    <Link
                        to="/"
                        className={linkClassName}
                        onClick={closeMenuOnMobile}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/form"
                        className={linkClassName}
                        onClick={closeMenuOnMobile}
                    >
                        Form
                    </Link>
                </li>
                <li>
                    <Link
                        to="/kunstenaars"
                        className={linkClassName}
                        onClick={closeMenuOnMobile}
                    >
                        Kunstenaars
                    </Link>
                </li>
                <li>
                    <Link
                        to="/kunstwerken"
                        className={linkClassName}
                        onClick={closeMenuOnMobile}
                    >
                        Kunstwerken
                    </Link>
                </li>
            </ul>
        );
    };
    return (
        <nav className="nav">
            {isMobile && (
                <div
                    id="nav-toggle"
                    className="nav__toggle"
                    onClick={toggleMenu}
                >
                    <IoMenu />
                </div>
            )}
            {isMobile ? (
                <div
                className={`nav__menu ${showMenu ? "show-menu" : ""}`}
                id="nav-menu"
            >
                {renderNavItems()}
                <div id="nav-close" className="nav__close" onClick={toggleMenu}>
                    <IoClose />
                </div>
            </div>
            ) :(
                renderNavItems()
            )}
        </nav>
    );
}

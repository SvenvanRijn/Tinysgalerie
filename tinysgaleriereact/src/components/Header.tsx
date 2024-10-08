import { IoClose, IoMenu } from "react-icons/io5";
import "../assets/components/Header.css";
import { useState } from "react";

export default function Header() {

    const page = window.location.pathname
    console.log(page);

    const logoUrl = "https://cardsolutions.nl/wp-content/uploads/2020/09/CARDSolutions2020BIG.svg";
    const navItems = [
        {name: "Home", url: "/"},
        {name: "Form", url: "/form"},
        {name: "Kunstenaars", url: "/kunstenaars"},
        {name: "Kunstwerken", url: "/kunstwerken"},
    ]


    const [showMenu, setShowMenu] = useState(false);


    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-7">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <IoClose className={showMenu ? "block h-6 w-6" : "hidden h-6 w-6" } aria-hidden="true" />
                            {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                            <IoMenu className={showMenu ? "hidden h-6 w-6" : "block h-6 w-6" }  aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src={logoUrl}
                                alt="Your Company"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.url}
                                        {...(item.url == page ? { className: "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" } : { className: "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" })}
                                        // aria-current="page"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}

            {showMenu && <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            {...(item.url == page ? { className: "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" } : { className: "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" })}
                            // aria-current="page"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>}
        </nav>
    );
}

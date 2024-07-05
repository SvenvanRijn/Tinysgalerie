import "../assets/components/Header.css";
import NavMenu from "./NavMenu.tsx";

export default function Header() {
    return (
        <div className="header flex justify-between items-center p-4 bg-blue-500">
            <h1 className="font-bold flex">Tiny Galerie</h1>
            <NavMenu />
        </div>
    );
}

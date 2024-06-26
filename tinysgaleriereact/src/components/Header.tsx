import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/components/Header.css";

export default function Header() {
    return (
        <div className="header flex justify-between p-4 bg-blue-500">
            <h1 className="font-bold">Tiny Galerie</h1>
            <ul className="flex gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/kunstenaars">Kunstenaars</Link></li>
                <li><Link to="/kunstwerken">Kunstwerken</Link></li>
            </ul>
        </div>
    );
}

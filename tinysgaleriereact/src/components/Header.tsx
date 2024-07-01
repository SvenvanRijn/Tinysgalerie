import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/components/Header.css";
import NavMenu from "./NavMenu.tsx";

export default function Header() {
    return (
        <div className="header flex justify-between p-4 bg-blue-500">
            <h1 className="font-bold">Tiny Galerie</h1>
            <NavMenu />
        </div>
    );
}

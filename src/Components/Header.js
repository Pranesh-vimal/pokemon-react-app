import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <NavLink
            to="/"
            className="w-full px-2 py-3 bg-indigo-500 text-center text-white font-bold fixed"
        >
            Pokemon
        </NavLink>
    );
}

export default Header;

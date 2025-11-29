import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-lg bg-transparent fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                                            </div>
                                {/* <h1 className="text-red-700  block md:hidden">Maison sow</h1> */}


                                            <button
                                                onClick={() => setIsOpen(!isOpen)}
                                                className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-transparent"
                                            >
                                                                        <FontAwesomeIcon icon={faPepperHot} className="text-red-700" />

                                            </button>

                                            {/* Menu */}
                    <ul
                        className={`
                            ${isOpen ? "block" : "hidden"}
                            md:flex 
                            absolute md:static
                            top-16 left-0 right-0 md:top-auto
                            bg-transparent
                            shadow-md md:shadow-none
                        `}
                    >
                        {["home", "about", , "contact"].map((item) => (
                            <li key={item} className="">
                                <a
                                    href={`#${item}`}
                                    className="block px-4 py-2 md:px-6 text-red-700 items-start text-right"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item === "home"
                                        ? "Nos Produit"
                                        : item === "about"
                                        ? "Notre histoire"
                                        // : item === "Contact"
                                        // ? "Contact"
                                        : "Contact"}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
